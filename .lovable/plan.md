# Ask-me-anything assistant on your portfolio

Add a small chat assistant to your site so a recruiter can ask things like "does he have B2B SaaS experience?" or "is he a fit for a senior PM role in fintech?" and get an answer grounded in your real content.

## No API key needed

You don't need to paste a Gemini key anywhere. Your project already includes built-in access to AI models, including Google's Gemini, through Lovable's AI service — billed from your workspace credits, with the key handled on the server so it's never exposed on the page. If you'd still rather use your own Gemini key, say so and I'll switch it to a private setting instead.

## What gets built

1. **A floating "Ask about Nithin" button** on the home page, bottom-right, in the same editorial style (thin border, mono label, orange accent).
2. **Clicking it opens a chat panel** with a text input, suggested starter questions ("What's his strongest experience?", "Has he worked with APIs?", "Would he fit a senior PM role?"), and answers that stream in as they're written.
3. **Answers stay grounded in your site content**: the assistant is given your roles and achievements from the experience section and your case studies (YouTube, N26, Duolingo, Doctolib, Synthflow) as its only source. If asked something outside that, it says it doesn't know and points to your email or Calendly.
4. **Tone**: concise, factual, third-person, never inventing employers, dates, or metrics.
5. Works on mobile and in both dark and cream themes; closes with Escape or by clicking outside.

## Technical notes

- Chat endpoint as a server route at `src/routes/api/chat.ts` using the Lovable AI Gateway with a Gemini model (`google/gemini-3.8-flash`) via `@ai-sdk/openai-compatible` + `streamText`; provider helper in `src/lib/ai-gateway.server.ts`. Key read server-side from `LOVABLE_API_KEY` only.
- Knowledge context assembled in a shared module from `src/lib/projects.ts` and the role data currently inlined in `src/components/ExperienceList.tsx` (roles array moved to `src/lib/experience.ts` so both the list and the assistant read one source).
- Client component `src/components/AskAssistant.tsx` using `useChat` from `@ai-sdk/react` with `DefaultChatTransport`, rendered via the existing `ModalPortal`, mounted on the home page (and optionally the case-studies page).
- Install `ai`, `@ai-sdk/react`, `@ai-sdk/openai-compatible`.
- Handle rate-limit and credit errors with a visible message in the panel rather than a silent failure.
