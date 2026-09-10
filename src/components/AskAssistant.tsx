import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ReactMarkdown from "react-markdown";

import { ModalPortal } from "@/components/ModalPortal";

const starters = [
  "What's his strongest experience?",
  "Has he worked with APIs?",
  "Would he fit a senior PM role?",
  "What did he do at TeamViewer?",
];

export function AskAssistant({ variant = "floating" }: { variant?: "floating" | "bar" }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [barInput, setBarInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const ask = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    setInput("");
    void sendMessage({ text: value });
  };

  return (
    <>
      {variant === "bar" ? (
        <div className="w-full">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const value = barInput.trim();
              if (!value) return;
              setBarInput("");
              setOpen(true);
              ask(value);
            }}
            className="group flex w-full items-center gap-2 border-2 border-signal bg-panel p-2 shadow-[0_0_24px_-4px_rgba(235,94,40,0.25)] transition-all duration-300 hover:border-signal hover:shadow-[0_0_32px_-2px_rgba(235,94,40,0.35)] focus-within:border-signal focus-within:shadow-[0_0_36px_-2px_rgba(235,94,40,0.45)]"
          >
            <span className="flex items-center gap-1.5 bg-signal px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
              ASK AI
            </span>
            <input
              value={barInput}
              onChange={(event) => setBarInput(event.target.value)}
              placeholder="Ask anything about Nithin's work…"
              aria-label="Ask anything about Nithin's work"
              className="flex-1 bg-transparent px-2 py-2 text-sm font-medium text-paper placeholder:text-paper/60 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-signal px-3.5 py-2 font-mono text-[11px] font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:bg-signal/90 active:scale-[0.97]"
              aria-label="Submit question"
            >
              <span>SEND</span>
              <span>→</span>
            </button>
          </form>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-paper/50">
            <span className="text-paper/40">TRY:</span>
            {starters.slice(0, 2).map((starter) => (
              <button
                key={starter}
                type="button"
                onClick={() => {
                  setOpen(true);
                  ask(starter);
                }}
                className="border border-paper/15 bg-panel/70 px-2 py-0.5 text-paper/70 transition-colors hover:border-signal hover:text-signal"
              >
                "{starter}"
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 border border-signal bg-ink px-4 py-3 font-mono text-[11px] text-signal shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-signal hover:text-ink"
        >
          ASK ABOUT NITHIN →
        </button>
      )}


      {open ? (
        <ModalPortal>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Ask about Nithin"
            className="fixed inset-0 z-50 flex items-end justify-end bg-ink/80 p-0 backdrop-blur-sm sm:p-6"
            onClick={() => setOpen(false)}
          >
            <div
              className="flex h-full w-full flex-col border border-paper/20 bg-ink sm:h-[min(620px,90vh)] sm:w-[420px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-paper/15 px-4 py-3">
                <div>
                  <p className="font-mono text-[11px] text-signal">ASK ABOUT NITHIN</p>
                  <p className="mt-1 text-xs text-paper/50">Experience, case studies, and role fit.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close assistant"
                  className="font-mono text-[11px] text-paper/60 transition-colors hover:text-signal"
                >
                  CLOSE ✕
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
                {messages.length === 0 ? (
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-paper/65">
                      Ask anything about Nithin's work, achievements, or whether he fits your role.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {starters.map((starter) => (
                        <button
                          key={starter}
                          type="button"
                          onClick={() => ask(starter)}
                          className="border border-paper/20 px-3 py-2 text-left font-mono text-[10px] text-paper/60 transition-colors hover:border-signal hover:text-signal"
                        >
                          {starter}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {messages.map((message) => {
                  const text = message.parts
                    .map((part) => (part.type === "text" ? part.text : ""))
                    .join("");
                  const isUser = message.role === "user";
                  return (
                    <div key={message.id} className={isUser ? "text-right" : "text-left"}>
                      <p className="font-mono text-[10px] text-paper/40">{isUser ? "YOU" : "ASSISTANT"}</p>
                      <div
                        className={`mt-1 inline-block max-w-full space-y-2 border px-3 py-2 text-left text-sm leading-relaxed [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-paper ${
                          isUser
                            ? "border-signal/50 text-paper"
                            : "border-paper/15 bg-panel text-paper/80"
                        }`}
                      >
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </div>
                    </div>
                  );
                })}

                {status === "submitted" ? (
                  <p className="font-mono text-[10px] text-paper/40">THINKING…</p>
                ) : null}

                {error ? (
                  <p className="border border-signal/50 px-3 py-2 text-sm text-signal">
                    The assistant couldn't answer right now. Please try again in a moment, or email
                    nithin.pranav@gmail.com.
                  </p>
                ) : null}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  ask(input);
                }}
                className="flex items-center gap-2 border-t border-paper/15 p-3"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a question…"
                  aria-label="Ask a question about Nithin"
                  className="flex-1 border border-paper/20 bg-transparent px-3 py-2 text-sm text-paper placeholder:text-paper/35 focus:border-signal focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="border border-signal px-3 py-2 font-mono text-[11px] text-signal transition-colors hover:bg-signal hover:text-ink disabled:opacity-40"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </ModalPortal>
      ) : null}
    </>
  );
}
