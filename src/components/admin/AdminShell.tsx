"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  UserPlus,
  X,
} from "lucide-react";

import { isAdminLoggedIn, setAdminLoggedIn } from "@/components/admin/adminAuth";
import { siteConfig } from "@/config/site";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: "/admin/contacts",
    label: "Contacts",
    icon: MessageSquare,
    exact: false,
  },
  {
    href: "/admin/leads",
    label: "Leads",
    icon: UserPlus,
    exact: false,
  },
] as const;

function getPageTitle(pathname: string) {
  if (pathname.startsWith("/admin/contacts")) return "Contacts";
  if (pathname.startsWith("/admin/leads")) return "Leads";
  return "Dashboard";
}

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace("/admin/login");
      return;
    }
    setReady(true);
  }, [router]);

  const handleLogout = () => {
    setAdminLoggedIn(false);
    router.replace("/admin/login");
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#EFF2F9]">
        <Image
          src="/newupdatelogo.png"
          alt={siteConfig.name}
          width={180}
          height={48}
          className="h-10 w-auto object-contain opacity-80"
          priority
        />
        <p className="text-[14px] text-[#656E83]">Loading admin...</p>
      </div>
    );
  }

  const pageTitle = getPageTitle(pathname);

  return (
    <div className="flex min-h-screen bg-[#F3F6FB]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-[#0E1420]/40 backdrop-blur-[2px] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-[#E7EAF4] bg-white shadow-[4px_0_24px_-12px_rgba(15,56,113,0.08)] transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-[#E7EAF4] px-5 py-5">
          <Link href="/admin" className="block" onClick={() => setSidebarOpen(false)}>
            <Image
              src="/newupdatelogo.png"
              alt={siteConfig.name}
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <div className="mt-4 inline-flex items-center rounded-full bg-[#EAF4FE] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
            Admin Panel
          </div>
        </div>

        <nav className="flex-1 space-y-1.5 p-4">
          <p className="mb-2 px-3 text-[11px] font-semibold tracking-[0.1em] text-[#9AA2B5] uppercase">
            Menu
          </p>
          {navItems.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-medium no-underline transition-all ${
                  active
                    ? "bg-[#1A91F0] text-white shadow-[0_8px_18px_-8px_rgba(26,145,240,0.7)]"
                    : "text-[#656E83] hover:bg-[#F7F9FC] hover:text-[#1E2532]"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#E7EAF4] p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-[#656E83] transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" aria-hidden />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-[#E7EAF4] bg-white/90 px-4 py-3.5 backdrop-blur-md lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              className="rounded-xl border border-[#E7EAF4] bg-white p-2 text-[#656E83] transition-colors hover:bg-[#F7F9FC] lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <div className="min-w-0">
              <p className="truncate text-[12px] font-medium tracking-wide text-[#9AA2B5] uppercase">
                {siteConfig.name}
              </p>
              <h1 className="truncate text-[18px] font-semibold text-[#1E2532]">
                {pageTitle}
              </h1>
            </div>
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden rounded-xl border border-[#E7EAF4] bg-[#F7F9FC] px-3.5 py-2 text-[13px] font-medium text-[#656E83] no-underline transition-colors hover:border-[#1A91F0]/30 hover:text-[#1A91F0] sm:inline-flex"
          >
            View Website
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
