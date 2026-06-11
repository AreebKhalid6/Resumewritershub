"use client";

import { useCallback, useEffect, useId, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  RefreshCw,
  X,
} from "lucide-react";

export type AdminContact = {
  _id: string;
  name: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
  agreed: boolean;
  createdAt: string;
  updatedAt: string;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

const PAGE_LIMIT = 10;

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#E7EAF4] bg-[#F7F9FC] px-4 py-3">
      <p className="text-[12px] font-semibold tracking-wide text-[#9AA2B5] uppercase">
        {label}
      </p>
      <div className="mt-1 text-[15px] leading-6 text-[#1E2532]">{children}</div>
    </div>
  );
}

function ContactDetailsModal({
  contact,
  onClose,
}: {
  contact: AdminContact;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#0E1420]/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-[#E7EAF4] bg-white shadow-[0px_24px_64px_-12px_rgba(15,56,113,0.28)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E7EAF4] px-5 py-4 sm:px-6">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.08em] text-[#1A91F0] uppercase">
              Contact Details
            </p>
            <h2
              id={titleId}
              className="mt-1 text-[20px] font-semibold text-[#1E2532]"
            >
              {contact.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E7EAF4] text-[#656E83] transition-colors hover:bg-[#F7F9FC] hover:text-[#1E2532]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[70vh] space-y-3 overflow-y-auto p-5 sm:p-6">
          <DetailRow label="Name">{contact.name}</DetailRow>

          <DetailRow label="Email">
            <a
              href={`mailto:${contact.email}`}
              className="text-[#1A91F0] no-underline hover:underline"
            >
              {contact.email}
            </a>
          </DetailRow>

          <DetailRow label="Phone">
            {contact.phone ? (
              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="text-[#1A91F0] no-underline hover:underline"
              >
                {contact.phone}
              </a>
            ) : (
              "—"
            )}
          </DetailRow>

          <DetailRow label="Subject">{contact.subject}</DetailRow>

          <DetailRow label="Message">
            <p className="whitespace-pre-wrap">{contact.message}</p>
          </DetailRow>

          <DetailRow label="Agreed">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-[12px] font-medium ${
                contact.agreed
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {contact.agreed ? "Yes" : "No"}
            </span>
          </DetailRow>

          <DetailRow label="Created">{formatDate(contact.createdAt)}</DetailRow>
          <DetailRow label="Updated">{formatDate(contact.updatedAt)}</DetailRow>
          <DetailRow label="ID">
            <span className="break-all font-mono text-[13px] text-[#656E83]">
              {contact._id}
            </span>
          </DetailRow>
        </div>
      </div>
    </div>
  );
}

export function AdminContactsPage() {
  const [contacts, setContacts] = useState<AdminContact[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: PAGE_LIMIT,
    total: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedContact, setSelectedContact] = useState<AdminContact | null>(
    null,
  );

  const loadContacts = useCallback(async (pageNumber: number) => {
    setLoading(true);
    setError("");
    setSelectedContact(null);

    try {
      const response = await fetch(
        `/api/contact?page=${pageNumber}&limit=${PAGE_LIMIT}`,
      );
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load contacts");
      }

      setContacts(result.data || []);
      setPagination(
        result.pagination || {
          page: pageNumber,
          limit: PAGE_LIMIT,
          total: 0,
          totalPages: 1,
          hasNext: false,
          hasPrev: false,
        },
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load contacts",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContacts(page);
  }, [page, loadContacts]);

  const from =
    pagination.total === 0 ? 0 : (pagination.page - 1) * pagination.limit + 1;
  const to = Math.min(pagination.page * pagination.limit, pagination.total);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[24px] font-semibold text-[#1E2532]">Contacts</h2>
          <p className="mt-1 text-[15px] text-[#656E83]">
            All messages submitted from the contact form.
          </p>
        </div>

        <button
          type="button"
          onClick={() => loadContacts(page)}
          disabled={loading}
          className="inline-flex h-[40px] items-center justify-center gap-2 rounded-xl border border-[#E7EAF4] bg-white px-4 text-[14px] font-medium text-[#1E2532] hover:bg-[#F7F9FC] disabled:opacity-60"
        >
          <RefreshCw
            className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
            aria-hidden
          />
          Refresh
        </button>
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700"
        >
          {error}
        </p>
      )}

      <div className="overflow-hidden rounded-2xl border border-[#E7EAF4] bg-white shadow-[0px_2px_12px_rgba(15,56,113,0.04)]">
        {loading ? (
          <p className="px-6 py-10 text-center text-[14px] text-[#656E83]">
            Loading contacts...
          </p>
        ) : contacts.length === 0 ? (
          <p className="px-6 py-10 text-center text-[14px] text-[#656E83]">
            No contact submissions yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-[14px]">
              <thead className="border-b border-[#E7EAF4] bg-[#F7F9FC] text-[12px] tracking-wide text-[#656E83] uppercase">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="border-b border-[#E7EAF4] last:border-b-0"
                  >
                    <td className="px-4 py-3 font-medium text-[#1E2532]">
                      {contact.name}
                    </td>
                    <td className="px-4 py-3 text-[#656E83]">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#1A91F0] no-underline hover:underline"
                      >
                        {contact.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-[#656E83]">
                      {contact.phone || "—"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        type="button"
                        onClick={() => setSelectedContact(contact)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7EAF4] text-[#1A91F0] transition-colors hover:bg-[#EAF4FE]"
                        aria-label={`View details for ${contact.name}`}
                        title="View details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && pagination.total > 0 && (
          <div className="flex flex-col gap-3 border-t border-[#E7EAF4] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[#656E83]">
              Showing {from}-{to} of {pagination.total}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={!pagination.hasPrev || loading}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className="inline-flex h-9 items-center gap-1 rounded-xl border border-[#E7EAF4] bg-white px-3 text-[13px] font-medium text-[#1E2532] disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Prev
              </button>

              <span className="min-w-[80px] text-center text-[13px] text-[#656E83]">
                Page {pagination.page} / {pagination.totalPages}
              </span>

              <button
                type="button"
                disabled={!pagination.hasNext || loading}
                onClick={() => setPage((current) => current + 1)}
                className="inline-flex h-9 items-center gap-1 rounded-xl border border-[#E7EAF4] bg-white px-3 text-[13px] font-medium text-[#1E2532] disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedContact && (
        <ContactDetailsModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
}
