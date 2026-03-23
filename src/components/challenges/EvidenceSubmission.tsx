"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Loader2, Upload, AlertCircle, CheckCircle, ImageIcon, Film } from "lucide-react";

export function EvidenceSubmission({
  challengeId,
  existingCount,
}: {
  challengeId: string;
  existingCount: number;
}) {
  const router      = useRouter();
  const fileRef     = useRef<HTMLInputElement>(null);
  const [file,        setFile]        = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [preview,     setPreview]     = useState<string>("");
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState("");
  const [uploaded,    setUploaded]    = useState(0);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setError("");
  }

  async function handleUpload() {
    if (!file) { setError("Please select a file."); return; }
    setError("");
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("description", description);

      const res  = await fetch(`/api/challenges/${challengeId}/evidence`, {
        method: "POST",
        body:   fd,
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Upload failed."); return; }

      setFile(null);
      setPreview("");
      setDescription("");
      if (fileRef.current) fileRef.current.value = "";
      setUploaded((n) => n + 1);
      router.refresh();
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const totalUploaded = existingCount + uploaded;

  return (
    <div className="glass rounded-xl p-6 border border-[rgba(251,191,36,0.2)]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-[#fbbf24]" />
          <h3 className="font-bold text-[#f0f0f5]">Submit Evidence</h3>
        </div>
        {totalUploaded > 0 && (
          <span className="text-xs text-[#00ff88] flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />{totalUploaded} file{totalUploaded !== 1 ? "s" : ""} uploaded
          </span>
        )}
      </div>

      <p className="text-sm text-[#6b7280] mb-5">
        Upload screenshots or video clips proving who won. Supported: JPG, PNG, GIF, WebP, MP4.
      </p>

      {error && (
        <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
        </div>
      )}

      {/* File picker */}
      <div
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors mb-4 ${
          file ? "border-[#00ff88] bg-[rgba(0,255,136,0.05)]" : "border-[#2a2a3a] hover:border-[#3a3a4a]"
        }`}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/*,video/mp4,video/quicktime"
          className="hidden"
          onChange={handleFileChange}
        />
        {preview ? (
          file?.type.startsWith("image") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="Preview" className="max-h-40 mx-auto rounded-lg object-contain" />
          ) : (
            <video src={preview} className="max-h-40 mx-auto rounded-lg" controls />
          )
        ) : (
          <div className="flex flex-col items-center gap-2 text-[#6b7280]">
            <div className="flex gap-3">
              <ImageIcon className="w-7 h-7" />
              <Film className="w-7 h-7" />
            </div>
            <span className="text-sm">Click to upload a screenshot or video</span>
            <span className="text-xs">Max 4 MB</span>
          </div>
        )}
      </div>

      {file && (
        <div className="text-xs text-[#6b7280] mb-3 flex items-center gap-2">
          {file.type.startsWith("image") ? <ImageIcon className="w-3 h-3" /> : <Film className="w-3 h-3" />}
          {file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB
        </div>
      )}

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe what this evidence shows (optional)"
        rows={2}
        className="w-full bg-[#1a1a24] border border-[#2a2a3a] rounded-lg px-4 py-3 text-sm text-[#f0f0f5] placeholder-[#6b7280] focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-colors resize-none mb-4"
      />

      <Button
        variant="primary"
        size="md"
        className="w-full font-bold"
        onClick={handleUpload}
        disabled={loading || !file}
      >
        {loading
          ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Uploading...</>
          : <><Upload className="w-4 h-4 mr-2" />Upload Evidence</>
        }
      </Button>

      <p className="text-xs text-[#6b7280] text-center mt-3">
        You can upload multiple files. Admin will review all evidence from both players.
      </p>
    </div>
  );
}
