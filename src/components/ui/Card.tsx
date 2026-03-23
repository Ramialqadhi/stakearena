import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "green" | "purple" | "none";
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  glow = "none",
  hover = false,
}: CardProps) {
  const glowStyles = {
    green: "glow-green",
    purple: "glow-purple",
    none: "",
  };

  return (
    <div
      className={`
        glass rounded-xl p-6
        ${glowStyles[glow]}
        ${hover ? "glass-hover transition-all duration-300 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-bold text-[#f0f0f5] ${className}`}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
