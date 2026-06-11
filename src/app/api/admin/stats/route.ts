import { NextResponse } from "next/server";

import { connectDB } from "../../../../../lib/mongodb";
import Contact from "../../../../../models/Contact";
import Lead from "../../../../../models/Lead";

export const runtime = "nodejs";

function startOfDay(date: Date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function dayLabel(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export async function GET() {
  try {
    await connectDB();

    const today = startOfDay(new Date());
    const weekStart = startOfDay(new Date());
    weekStart.setDate(weekStart.getDate() - 6);

    const [
      totalContacts,
      todayContacts,
      totalLeads,
      todayLeads,
      contactsWeek,
      leadsWeek,
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ createdAt: { $gte: today } }),
      Lead.countDocuments(),
      Lead.countDocuments({ createdAt: { $gte: today } }),
      Contact.find({ createdAt: { $gte: weekStart } })
        .select("createdAt")
        .lean(),
      Lead.find({ createdAt: { $gte: weekStart } })
        .select("createdAt")
        .lean(),
    ]);

    const dailyMap = new Map<
      string,
      { date: string; label: string; contacts: number; leads: number }
    >();

    for (let i = 6; i >= 0; i -= 1) {
      const day = startOfDay(new Date());
      day.setDate(day.getDate() - i);
      const key = day.toISOString().slice(0, 10);

      dailyMap.set(key, {
        date: key,
        label: dayLabel(day),
        contacts: 0,
        leads: 0,
      });
    }

    for (const item of contactsWeek) {
      if (!item.createdAt) continue;
      const key = new Date(item.createdAt).toISOString().slice(0, 10);
      const entry = dailyMap.get(key);
      if (entry) entry.contacts += 1;
    }

    for (const item of leadsWeek) {
      if (!item.createdAt) continue;
      const key = new Date(item.createdAt).toISOString().slice(0, 10);
      const entry = dailyMap.get(key);
      if (entry) entry.leads += 1;
    }

    const daily = Array.from(dailyMap.values());

    return NextResponse.json({
      success: true,
      data: {
        totals: {
          contacts: totalContacts,
          leads: totalLeads,
          todayContacts,
          todayLeads,
        },
        daily,
        overview: [
          { name: "Contacts", value: totalContacts, color: "#1A91F0" },
          { name: "Leads", value: totalLeads, color: "#25B869" },
        ],
      },
    });
  } catch (error) {
    console.error("Admin stats error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch dashboard stats",
      },
      { status: 500 },
    );
  }
}
