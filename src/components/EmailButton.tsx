import { useState } from "react";
import { Check, Mail } from "lucide-react";

export const CONTACT_EMAIL = "nithin.pranav@gmail.com";

export function EmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  function showCopied() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // Older fallback for in-app browsers that block the async Clipboard API
  function copyWithTextarea() {
    const textarea = document.createElement("textarea");
    textarea.value = CONTACT_EMAIL;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    if (ok) showCopied();
  }

  // mailto: does nothing on machines without a mail app, so also copy the address
  function handleClick() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT_EMAIL).then(showCopied, copyWithTextarea);
    } else {
      copyWithTextarea();
    }
  }

  return (
    <a href={`mailto:${CONTACT_EMAIL}`} onClick={handleClick} title={CONTACT_EMAIL} className={className}>
      {copied ? <Check className="h-3.5 w-3.5" /> : <Mail className="h-3.5 w-3.5" />}
      <span aria-live="polite">{copied ? "EMAIL COPIED" : "EMAIL"}</span>
    </a>
  );
}
