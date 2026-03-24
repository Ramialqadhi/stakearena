"use client";

import { useState, useEffect, useCallback } from "react";

export interface SessionUser {
  id: string;
  email: string;
  username: string;
  balance: number;
  isAdmin: boolean;
  name?: string;
  image?: string;
}

export interface Session {
  user: SessionUser;
}

type Status = "loading" | "authenticated" | "unauthenticated";

interface UseSessionReturn {
  data: Session | null;
  status: Status;
  update: () => Promise<Session | null>;
}

export function useSession(): UseSessionReturn {
  const [data, setData] = useState<Session | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  const fetchSession = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/session");
      if (!res.ok) { setStatus("unauthenticated"); return null; }
      const json = await res.json();
      if (json?.user) {
        setData(json as Session);
        setStatus("authenticated");
        return json as Session;
      } else {
        setData(null);
        setStatus("unauthenticated");
        return null;
      }
    } catch {
      setData(null);
      setStatus("unauthenticated");
      return null;
    }
  }, []);

  useEffect(() => { fetchSession(); }, [fetchSession]);

  const update = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/session", { method: "POST" });
      if (!res.ok) return null;
      const json = await res.json();
      if (json?.user) {
        setData(json as Session);
        setStatus("authenticated");
        return json as Session;
      }
      return null;
    } catch {
      return null;
    }
  }, []);

  return { data, status, update };
}

export async function signOut({ callbackUrl = "/" }: { callbackUrl?: string } = {}) {
  await fetch("/api/auth/logout", { method: "POST" });
  window.location.href = callbackUrl;
}
