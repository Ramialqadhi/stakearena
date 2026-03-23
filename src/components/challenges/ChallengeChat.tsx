"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Send, MessageSquare } from "lucide-react";

type Message = {
  id: string;
  userId: string;
  message: string;
  createdAt: string;
  user: { id: string; username: string };
};

export function ChallengeChat({
  challengeId,
  currentUserId,
}: {
  challengeId: string;
  currentUserId: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState("");
  const [sending, setSending]   = useState(false);
  const [sendError, setSendError] = useState("");
  const bottomRef               = useRef<HTMLDivElement>(null);

  const fetchMessages = useCallback(async () => {
    try {
      const res  = await fetch(`/api/challenges/${challengeId}/messages`);
      const data = await res.json();
      if (data.messages) setMessages(data.messages);
    } catch {
      // silent — keep showing existing messages
    }
  }, [challengeId]);

  // Initial load + poll every 5s
  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [fetchMessages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || sending) return;

    const text = input.trim();
    setSendError("");
    setInput("");
    setSending(true);

    try {
      const res = await fetch(`/api/challenges/${challengeId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSendError(data.error ?? "Failed to send message.");
        setInput(text); // restore input so the user doesn't lose their message
        return;
      }

      // Refresh to get server message with real username/id
      await fetchMessages();
    } catch {
      setSendError("Network error. Please try again.");
      setInput(text);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="glass rounded-2xl border border-[#1e1e2e] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#1e1e2e] flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-[#8b5cf6]" />
        <h3 className="font-bold text-[#f0f0f5] text-sm">Match Chat</h3>
        <span className="ml-auto text-xs text-[#6b7280]">Only visible to match participants</span>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto px-4 py-3 flex flex-col gap-2">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <MessageSquare className="w-8 h-8 text-[#2a2a3a] mb-2" />
            <p className="text-xs text-[#6b7280]">No messages yet. Say hello!</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.userId === currentUserId;
            return (
              <div key={msg.id} className={`flex flex-col gap-0.5 ${isMe ? "items-end" : "items-start"}`}>
                <div className={`flex items-center gap-1.5 text-[10px] text-[#6b7280] ${isMe ? "flex-row-reverse" : ""}`}>
                  <span className="font-semibold">{isMe ? "You" : msg.user.username}</span>
                  <span>·</span>
                  <span>{formatTime(msg.createdAt)}</span>
                </div>
                <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed break-words ${
                  isMe
                    ? "bg-[#8b5cf6] text-white rounded-tr-sm"
                    : "bg-[#1a1a24] border border-[#2a2a3a] text-[#f0f0f5] rounded-tl-sm"
                }`}>
                  {msg.message}
                </div>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>

      {/* Send error */}
      {sendError && (
        <div className="px-4 pt-2 text-xs text-red-400">{sendError}</div>
      )}

      {/* Input */}
      <form onSubmit={handleSend} className="px-4 py-3 border-t border-[#1e1e2e] flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); if (sendError) setSendError(""); }}
          placeholder="Type a message..."
          maxLength={500}
          className="flex-1 bg-[#1a1a24] border border-[#2a2a3a] rounded-lg px-3 py-2 text-sm text-[#f0f0f5] placeholder-[#6b7280] focus:outline-none focus:border-[#8b5cf6] transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || sending}
          className="w-9 h-9 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0 transition-colors"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </form>
    </div>
  );
}

function formatTime(iso: string) {
  const date = new Date(iso);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}
