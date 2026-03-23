import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  pulse = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#00ff88] text-[#0a0a0f] hover:bg-[#00cc6a] font-bold glow-green",
    secondary:
      "bg-[#8b5cf6] text-white hover:bg-[#7c3aed] glow-purple",
    outline:
      "border border-[#00ff88] text-[#00ff88] hover:bg-[rgba(0,255,136,0.1)] bg-transparent",
    ghost:
      "text-[#f0f0f5] hover:bg-[rgba(255,255,255,0.08)] bg-transparent",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${pulse ? "btn-pulse" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
