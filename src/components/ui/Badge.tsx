import React from "react";

type BadgeVariant = "success" | "warning" | "danger" | "info" | "default" | "purple";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    success: "bg-[rgba(0,255,136,0.15)] text-[#00ff88] border border-[rgba(0,255,136,0.3)]",
    warning: "bg-[rgba(251,191,36,0.15)] text-[#fbbf24] border border-[rgba(251,191,36,0.3)]",
    danger: "bg-[rgba(239,68,68,0.15)] text-[#ef4444] border border-[rgba(239,68,68,0.3)]",
    info: "bg-[rgba(59,130,246,0.15)] text-[#3b82f6] border border-[rgba(59,130,246,0.3)]",
    purple: "bg-[rgba(139,92,246,0.15)] text-[#8b5cf6] border border-[rgba(139,92,246,0.3)]",
    default: "bg-[rgba(255,255,255,0.08)] text-[#a1a1aa] border border-[rgba(255,255,255,0.1)]",
  };

  const statusMap: Record<string, BadgeVariant> = {
    PENDING: "warning",
    ACTIVE: "success",
    COMPLETED: "info",
    CANCELLED: "danger",
  };

  const resolvedVariant =
    typeof children === "string" && children in statusMap
      ? statusMap[children]
      : variant;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variantStyles[resolvedVariant]} ${className}`}
    >
      {children}
    </span>
  );
}
