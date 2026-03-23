"use client";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[#a1a1aa]">{label}</label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full bg-[#1a1a24] border border-[#2a2a3a] rounded-lg px-4 py-3 text-[#f0f0f5] placeholder-[#6b7280] focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors ${icon ? "pl-10" : ""} ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-red-400 text-xs">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
