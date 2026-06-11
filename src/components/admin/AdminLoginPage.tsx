"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { Lock, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import {
  isAdminLoggedIn,
  setAdminLoggedIn,
} from "@/components/admin/adminAuth";

export function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAdminLoggedIn()) {
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Invalid credentials");
      }

      setAdminLoggedIn(true);
      router.replace("/admin");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#EFF2F9] px-4 py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,145,240,0.12),_transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#E7EAF4 1px, transparent 1px), linear-gradient(90deg, #E7EAF4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[420px]">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/newupdatelogo.png"
            alt={siteConfig.name}
            width={320}
            height={90}
            className="h-16 w-auto object-contain sm:h-20"
            priority
          />
       
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E7EAF4] bg-white/95 p-7 shadow-[0px_16px_40px_-12px_rgba(15,56,113,0.12)] backdrop-blur-sm sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-[14px] font-medium text-[#1E2532]"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#828BA2]"
                  aria-hidden
                />
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@resumewritershub.com"
                  className="w-full rounded-xl border border-[#E7EAF4] bg-[#F7F9FC] py-3.5 pr-4 pl-11 text-[15px] text-[#1E2532] outline-none transition-colors placeholder:text-[#828BA2] focus:border-[#1A91F0] focus:bg-white focus:ring-4 focus:ring-[#1A91F0]/12"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-[14px] font-medium text-[#1E2532]"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#828BA2]"
                  aria-hidden
                />
                <input
                  id="admin-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-[#E7EAF4] bg-[#F7F9FC] py-3.5 pr-4 pl-11 text-[15px] text-[#1E2532] outline-none transition-colors placeholder:text-[#828BA2] focus:border-[#1A91F0] focus:bg-white focus:ring-4 focus:ring-[#1A91F0]/12"
                />
              </div>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-[13px] text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex h-[50px] w-full items-center justify-center rounded-xl bg-[#1A91F0] text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(26,145,240,0.55)] transition-all hover:bg-[#1580d8] hover:shadow-[0_12px_28px_-8px_rgba(26,145,240,0.65)] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
