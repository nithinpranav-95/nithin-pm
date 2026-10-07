import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

import {
  createLovableAiGatewayProvider,
  getLovableAiGatewayResponseHeaders,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";
import { systemPrompt } from "@/lib/assistant-knowledge";

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as ChatRequestBody;
          if (!Array.isArray(messages)) {
            return new Response("Messages are required", { status: 400 });
          }

          const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env || {};
          const geminiKey = (
            process.env["GEMINI_API_KEY"] ||
            process.env["GOOGLE_GENERATIVE_AI_API_KEY"] ||
            process.env["GOOGLE_API_KEY"] ||
            metaEnv["GEMINI_API_KEY"] ||
            metaEnv["VITE_GEMINI_API_KEY"] ||
            metaEnv["GOOGLE_GENERATIVE_AI_API_KEY"]
          )?.trim();
          const lovableKey = (process.env["LOVABLE_API_KEY"] || metaEnv["LOVABLE_API_KEY"])?.trim();

          if (!geminiKey && !lovableKey) {
            console.error("[chat] Neither GEMINI_API_KEY nor LOVABLE_API_KEY is configured.");
            return new Response(
              "Gemini API key is not configured. Please set GEMINI_API_KEY in your deployment environment variables.",
              { status: 500 },
            );
          }

          const modelMessages = await convertToModelMessages(messages as UIMessage[]);

          if (geminiKey) {
            const google = createGoogleGenerativeAI({
              apiKey: geminiKey,
            });

            const modelName = process.env["GEMINI_MODEL"]?.trim() || "gemini-3.8-flash";

            const result = streamText({
              model: google(modelName),
              system: systemPrompt,
              messages: modelMessages,
              onError({ error }) {
                console.error(`[chat] Gemini API stream error (${modelName}):`, error);
              },
            });

            return result.toUIMessageStreamResponse({
              originalMessages: messages as UIMessage[],
            });
          }

          // Fallback for Lovable AI Gateway if LOVABLE_API_KEY is present
          const initialRunId = getLovableAiGatewayRunId(request);
          const gateway = createLovableAiGatewayProvider(lovableKey!, initialRunId);

          const result = streamText({
            model: gateway("google/gemini-2.0-flash"),
            system: systemPrompt,
            messages: modelMessages,
            onError({ error }) {
              console.error("[chat] Lovable AI Gateway stream error:", error);
            },
          });

          const response = result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
            headers: getLovableAiGatewayResponseHeaders(undefined, {
              ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
            }),
          });

          return withLovableAiGatewayRunIdHeader(response, gateway);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          console.error("[chat] POST exception:", err);
          return new Response(message, { status: 500 });
        }
      },
    },
  },
});
