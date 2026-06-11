"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  MessageSquare,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Stats = {
  totalContacts: number;
  todayContacts: number;
  totalLeads: number;
  todayLeads: number;
};

type DailyPoint = {
  date: string;
  label: string;
  contacts: number;
  leads: number;
};

type PiePoint = {
  name: string;
  value: number;
  color?: string;
};

const PIE_COLORS = ["#1A91F0", "#25B869", "#F59E0B", "#8B5CF6", "#EF4444"];

function StatCard({
  label,
  value,
  icon: Icon,
  loading,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  loading: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#E7EAF4] bg-white p-5 shadow-[0px_2px_12px_rgba(15,56,113,0.04)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium text-[#656E83]">{label}</p>
          <p className="mt-2 text-[30px] leading-none font-semibold tracking-tight text-[#1E2532]">
            {loading ? "—" : value}
          </p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4FE]">
          <Icon className="h-5 w-5 text-[#1A91F0]" aria-hidden />
        </div>
      </div>
    </div>
  );
}

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#E7EAF4] bg-white p-5 shadow-[0px_2px_12px_rgba(15,56,113,0.04)] sm:p-6">
      <h3 className="text-[17px] font-semibold text-[#1E2532]">{title}</h3>
      <p className="mt-1 text-[13px] text-[#656E83]">{description}</p>
      <div className="mt-5 h-[280px] w-full">{children}</div>
    </div>
  );
}

export function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalContacts: 0,
    todayContacts: 0,
    totalLeads: 0,
    todayLeads: 0,
  });
  const [daily, setDaily] = useState<DailyPoint[]>([]);
  const [overview, setOverview] = useState<PiePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/admin/stats");
        const result = await response.json();

        if (!response.ok || !result.success) return;

        if (!cancelled) {
          setStats({
            totalContacts: result.data.totals.contacts ?? 0,
            todayContacts: result.data.totals.todayContacts ?? 0,
            totalLeads: result.data.totals.leads ?? 0,
            todayLeads: result.data.totals.todayLeads ?? 0,
          });
          setDaily(result.data.daily || []);
          setOverview(result.data.overview || []);
        }
      } catch {
        // Keep zeros on failure
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const hasOverviewData = overview.some((item) => item.value > 0);
  const hasDailyData = daily.some(
    (item) => item.contacts > 0 || item.leads > 0,
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[#E7EAF4] bg-gradient-to-br from-[#EAF4FE] via-white to-white p-6 sm:p-8">
        <p className="text-[12px] font-semibold tracking-[0.1em] text-[#1A91F0] uppercase">
          Overview
        </p>
        <h2 className="mt-2 text-[24px] font-semibold text-[#1E2532] sm:text-[28px]">
          Dashboard
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-6 text-[#656E83]">
          Track contact messages and free consultation leads from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Contacts"
          value={stats.totalContacts}
          icon={Users}
          loading={loading}
        />
        <StatCard
          label="Contacts Today"
          value={stats.todayContacts}
          icon={MessageSquare}
          loading={loading}
        />
        <StatCard
          label="Total Leads"
          value={stats.totalLeads}
          icon={UserPlus}
          loading={loading}
        />
        <StatCard
          label="Leads Today"
          value={stats.todayLeads}
          icon={UserPlus}
          loading={loading}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <ChartCard
          title="Last 7 Days"
          description="Bar chart of contacts and leads submitted each day."
        >
          {loading ? (
            <div className="flex h-full items-center justify-center text-[14px] text-[#656E83]">
              Loading chart...
            </div>
          ) : !hasDailyData ? (
            <div className="flex h-full items-center justify-center text-[14px] text-[#656E83]">
              No submissions in the last 7 days yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={daily} barGap={6}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E7EAF4" />
                <XAxis
                  dataKey="label"
                  tick={{ fill: "#656E83", fontSize: 11 }}
                  axisLine={{ stroke: "#E7EAF4" }}
                  tickLine={false}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: "#656E83", fontSize: 11 }}
                  axisLine={{ stroke: "#E7EAF4" }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    borderColor: "#E7EAF4",
                    boxShadow: "0 8px 24px rgba(15,56,113,0.08)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="contacts"
                  name="Contacts"
                  fill="#1A91F0"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="leads"
                  name="Leads"
                  fill="#25B869"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartCard>

        <ChartCard
          title="Contacts vs Leads"
          description="Pie chart showing overall share of contacts and leads."
        >
          {loading ? (
            <div className="flex h-full items-center justify-center text-[14px] text-[#656E83]">
              Loading chart...
            </div>
          ) : !hasOverviewData ? (
            <div className="flex h-full items-center justify-center text-[14px] text-[#656E83]">
              No data available yet.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overview}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {overview.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color || PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    borderColor: "#E7EAF4",
                    boxShadow: "0 8px 24px rgba(15,56,113,0.08)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </div>

    
    </div>
  );
}
