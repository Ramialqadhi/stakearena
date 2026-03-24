"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { SUPPORTED_GAMES } from "@/types";
import { GAME_CREDENTIALS } from "@/lib/gameCredentials";
import { CheckCircle, Loader2, AlertCircle, Gamepad2 } from "lucide-react";

type Creds = Record<string, string>;

function GameCredentialField({
  game,
  savedValue,
  onSaved,
}: {
  game: { id: string; name: string; emoji: string };
  savedValue: string;
  onSaved: (gameId: string, value: string) => void;
}) {
  const config = GAME_CREDENTIALS[game.id];
  const [value,   setValue]   = useState(savedValue);
  const [saving,  setSaving]  = useState(false);
  const [saved,   setSaved]   = useState(!!savedValue);
  const [error,   setError]   = useState("");

  // Sync when parent updates (e.g. initial fetch)
  useEffect(() => {
    setValue(savedValue);
    setSaved(!!savedValue);
  }, [savedValue]);

  const isDirty = value.trim() !== savedValue;

  async function save() {
    if (!value.trim()) return;
    setSaving(true);
    setError("");
    try {
      const res  = await fetch("/api/user/game-credentials", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ game: game.id, value: value.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to save."); return; }
      setSaved(true);
      onSaved(game.id, value.trim());
    } catch {
      setError("Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(18,18,26,0.85)",
        border: saved && !isDirty
          ? "1px solid rgba(0,255,136,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center gap-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="text-xl leading-none">{game.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-[#f0f0f5] text-sm">{game.name}</div>
          {config && (
            <div className="text-xs text-[#6b7280] mt-0.5">{config.label}</div>
          )}
        </div>
        {saved && !isDirty && (
          <div className="flex items-center gap-1.5 text-[#00ff88] text-xs font-semibold">
            <CheckCircle className="w-4 h-4" />
            Saved
          </div>
        )}
      </div>

      {/* Input + button */}
      <div className="px-5 py-4 flex flex-col gap-3">
        {config && (
          <p className="text-xs text-[#6b7280]">
            {config.hint}
          </p>
        )}
        {error && (
          <div className="flex items-center gap-2 text-red-400 text-xs">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </div>
        )}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={config?.placeholder ?? "Enter your username"}
            value={value}
            onChange={e => { setValue(e.target.value); setSaved(false); }}
            onKeyDown={e => e.key === "Enter" && value.trim() && !saving && save()}
            className="flex-1 bg-[#0d0d14] border border-[#2a2a3a] rounded-xl px-4 py-2.5 text-sm text-[#f0f0f5] placeholder-[#4b4b5a] focus:outline-none focus:border-[rgba(0,255,136,0.5)] transition-colors"
          />
          <button
            onClick={save}
            disabled={saving || !value.trim() || (!isDirty && !!savedValue)}
            className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
            style={{
              background: saved && !isDirty ? "rgba(0,255,136,0.12)" : "#00ff88",
              color: saved && !isDirty ? "#00ff88" : "#0a0a0f",
            }}
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : saved && !isDirty ? (
              <><CheckCircle className="w-4 h-4" />Saved</>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [creds,   setCreds]   = useState<Creds>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") { router.push("/login"); return; }
    if (status !== "authenticated")   return;
    fetch("/api/user/game-credentials")
      .then(r => r.json())
      .then(d => setCreds(d.credentials ?? {}))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [status, router]);

  if (status === "loading" || loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-[#00ff88] animate-spin" />
        </div>
      </div>
    );
  }

  const username = session?.user?.username ?? session?.user?.name ?? "";

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ff88] to-[#8b5cf6] flex items-center justify-center font-black text-[#0a0a0f]">
              {username[0]?.toUpperCase() ?? "U"}
            </div>
            <div>
              <h1 className="text-xl font-black text-[#f0f0f5]">{username}</h1>
              <p className="text-xs text-[#6b7280]">{session?.user?.email}</p>
            </div>
          </div>
        </div>

        {/* Game Profiles section */}
        <section>
          <div className="flex items-center gap-2.5 mb-2">
            <Gamepad2 className="w-5 h-5 text-[#00ff88]" />
            <h2 className="text-lg font-black text-[#f0f0f5]">Game Profiles</h2>
          </div>
          <p className="text-sm text-[#6b7280] mb-5">
            Save your in-game credentials once — they&apos;ll be used automatically in every match.
            You must have credentials saved for a game before you can create or join challenges for it.
          </p>

          <div className="flex flex-col gap-4">
            {SUPPORTED_GAMES.map(game => (
              <GameCredentialField
                key={game.id}
                game={game}
                savedValue={creds[game.id] ?? ""}
                onSaved={(id, val) => setCreds(prev => ({ ...prev, [id]: val }))}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
