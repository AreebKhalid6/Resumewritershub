"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M7 10V8a5 5 0 0 1 10 0v2h1.5A1.5 1.5 0 0 1 20 11.5v8A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5v-8A1.5 1.5 0 0 1 5.5 10H7zm2 0h6V8a3 3 0 0 0-6 0v2z"
        fill="#25B869"
      />
    </svg>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const dismiss = (choice: string) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 w-[520px] max-w-[calc(100vw-40px)] rounded-lg bg-white p-4 shadow-[0_0_32px_rgba(23,68,130,0.1)]">
      <div className="flex items-center gap-1.5">
        <h3 className="text-[15px] leading-5 font-normal text-[#1E2532]">
          Cookies improve your experience
        </h3>
        <LockIcon />
      </div>

      <p className="mt-2 text-[13px] leading-[18px] text-[#0F141E]">
        We use cookies to make our website work better. They improve your
        experience and help with our advertising and analysis. By agreeing, you
        accept that your data may be shared with our colleagues in the USA. You
        can reject cookie permission at any time, just send an email to{" "}
        <a
          href="mailto:privacy@resumewritershub.com"
          className="text-[#0F141E] underline hover:text-[#1A91F0]"
        >
          privacy@resumewritershub.com
        </a>
        . Please see our{" "}
        <a href="#" className="text-[#0F141E] underline hover:text-[#1A91F0]">
          Cookie policy
        </a>{" "}
        for more detail.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => dismiss("all")}
          className="flex h-8 items-center justify-center rounded-[4px] bg-[#1A91F0] px-3.5 text-[12px] leading-4 font-semibold text-white hover:bg-[#1580d8]"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => dismiss("essential")}
          className="flex h-8 items-center justify-center rounded-[4px] bg-[#1A91F0] px-3.5 text-[12px] leading-4 font-semibold text-white hover:bg-[#1580d8]"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => dismiss("preferences")}
          className="flex h-8 items-center justify-center rounded-[4px] bg-[#EAF6FF] px-3.5 text-[12px] leading-4 font-semibold text-[#1A91F0] hover:bg-[#d6edff]"
        >
          Preferences
        </button>
      </div>
    </div>
  );
}
