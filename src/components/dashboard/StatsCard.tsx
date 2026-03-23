import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color?: string;
  subtext?: string;
}

export function StatsCard({ icon, value, label, color = "#00ff88", subtext }: StatsCardProps) {
  return (
    <div className="glass rounded-xl p-5 border border-[#1e1e2e] flex flex-col gap-3">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
      >
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <div className="text-2xl font-black" style={{ color }}>
          {value}
        </div>
        <div className="text-sm text-[#6b7280] mt-0.5">{label}</div>
        {subtext && <div className="text-xs text-[#4b5563] mt-1">{subtext}</div>}
      </div>
    </div>
  );
}
