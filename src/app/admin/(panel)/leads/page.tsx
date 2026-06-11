import type { Metadata } from "next";

import { AdminLeadsPage } from "@/components/admin/AdminLeadsPage";

export const metadata: Metadata = {
  title: "Admin Leads",
};

export default function AdminLeadsRoute() {
  return <AdminLeadsPage />;
}
