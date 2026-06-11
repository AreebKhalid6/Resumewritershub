import type { Metadata } from "next";

import { AdminContactsPage } from "@/components/admin/AdminContactsPage";

export const metadata: Metadata = {
  title: "Admin Contacts",
};

export default function AdminContactsRoute() {
  return <AdminContactsPage />;
}
