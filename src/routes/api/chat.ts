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
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const geminiKey =
          process.env["GEMINI_API_KEY"] ||
          process.env["GOOGLE_GENERATIVE_AI_API_KEY"] ||
          process.env["GOOGLE_API_KEY"];
        const lovableKey = process.env["LOVABLE_API_KEY"];

        if (!geminiKey && !lovableKey) {
          return new Response(
            "Gemini API key is not configured. Please set GEMINI_API_KEY in your environment variables.",
            { status: 500 },
          );
        }

        const modelMessages = await convertToModelMessages(messages as UIMessage[]);

        if (geminiKey) {
          const google = createGoogleGenerativeAI({
            apiKey: geminiKey,
          });

          const modelName = process.env["GEMINI_MODEL"] || "gemini-2.5-flash";

          const result = streamText({
            model: google(modelName),
            system: systemPrompt,
            messages: modelMessages,
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        }

        // Fallback for Lovable AI Gateway if LOVABLE_API_KEY is present
        const initialRunId = getLovableAiGatewayRunId(request);
        const gateway = createLovableAiGatewayProvider(lovableKey!, initialRunId);

        const result = streamText({
          model: gateway("google/gemini-2.5-flash"),
          system: systemPrompt,
          messages: modelMessages,
        });

        const response = result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
          headers: getLovableAiGatewayResponseHeaders(undefined, {
            ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
          }),
        });

        return withLovableAiGatewayRunIdHeader(response, gateway);
      },
    },
  },
});
