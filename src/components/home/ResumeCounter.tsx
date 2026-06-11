"use client";

import { useEffect, useState } from "react";

const START_COUNT = 369_345;
const LIMIT = 485_284;
const RESUMES_PER_SECOND = 8;
const ANIMATION_DURATION_MS = 1200;

function getCappedCount(): number {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsElapsed = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.min(
    LIMIT,
    Math.floor(START_COUNT + secondsElapsed * RESUMES_PER_SECOND),
  );
}

type ResumeCounterProps = {
  className?: string;
};

export function ResumeCounter({ className = "" }: ResumeCounterProps) {
  const [count, setCount] = useState(START_COUNT);

  useEffect(() => {
    const target = getCappedCount();
    const start = Math.max(START_COUNT, target - 4000);
    const startTime = performance.now();
    let frameId = 0;

    function animate(now: number) {
      const progress = Math.min((now - startTime) / ANIMATION_DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(start + (target - start) * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);

    const interval = setInterval(() => {
      setCount(getCappedCount());
    }, 1000);

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(interval);
    };
  }, []);

  return (
    <span className={className} aria-live="polite">
      {count.toLocaleString("en-US")}
    </span>
  );
}
