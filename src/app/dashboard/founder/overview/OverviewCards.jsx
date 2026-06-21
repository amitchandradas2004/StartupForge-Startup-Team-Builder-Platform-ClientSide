"use client";

import { Briefcase, FileText, user } from "lucide-react";
import { PiUsersFill } from "react-icons/pi";

export default function OverviewCards({
  totalOpportunities = 0,
  totalApplications = 0,
  acceptedMembers = 0,
}) {
  const stats = [
    {
      label: "Total Opportunities",
      value: totalOpportunities,
      icon: Briefcase,
      color: "text-indigo-600",
      bg: "bg-indigo-100 dark:bg-indigo-500/10",
    },
    {
      label: "Total Applications",
      value: totalApplications,
      icon: FileText,
      color: "text-emerald-600",
      bg: "bg-emerald-100 dark:bg-emerald-500/10",
    },
    {
      label: "Accepted Members",
      value: acceptedMembers,
      icon: PiUsersFill,
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition "
          >
            <div className="flex flex-col h-30  space-y-3 w-full">
              <div className={`p-3 rounded-xl ${item.bg} w-12`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>

              <p className="text-sm text-slate-500">{item.label}</p>
              <h2 className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">
                {item.value}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
