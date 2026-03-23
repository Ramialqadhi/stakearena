"use client";

import { Video, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface RecordingNoticeModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function RecordingNoticeModal({ onConfirm, onCancel }: RecordingNoticeModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onCancel} />

      {/* Modal */}
      <div className="relative w-full max-w-md glass rounded-2xl border border-[rgba(245,158,11,0.4)] overflow-hidden shadow-2xl"
        style={{ boxShadow: "0 0 48px rgba(245,158,11,0.15)" }}
      >
        {/* Amber header stripe */}
        <div className="bg-[rgba(245,158,11,0.12)] border-b border-[rgba(245,158,11,0.25)] px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.35)] flex items-center justify-center flex-shrink-0">
            <Video className="w-5 h-5 text-[#f59e0b]" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-black text-[#f0f0f5]">Recording Required</h2>
            <p className="text-xs text-[#f59e0b] font-semibold">Mandatory for all matches</p>
          </div>
          <button onClick={onCancel} className="text-[#6b7280] hover:text-[#a1a1aa] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
            You are required to <span className="text-[#f0f0f5] font-semibold">record your screen or gameplay</span> for
            the full duration of this match. Recordings may be requested as evidence in the event of a dispute.
          </p>

          {/* Warning box */}
          <div className="rounded-xl border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.06)] px-4 py-3 mb-6">
            <p className="text-xs text-[#fbbf24] leading-relaxed">
              <span className="font-bold">Important:</span> Failure to provide a recording when requested during a dispute
              may result in the match being awarded to your opponent.
            </p>
          </div>

          <p className="text-[#6b7280] text-xs mb-6">
            By clicking &ldquo;I Understand, Continue&rdquo; you confirm that you will record this match.
          </p>

          <div className="flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              className="w-full font-bold"
              onClick={onConfirm}
            >
              <Video className="w-4 h-4 mr-2" />
              I Understand, Continue
            </Button>
            <Button
              variant="ghost"
              size="md"
              className="w-full text-[#6b7280]"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
