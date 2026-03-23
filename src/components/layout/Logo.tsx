import Link from "next/link";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const fontSize = size === "lg" ? "1.5rem" : "1.25rem"; // text-2xl : text-xl
  const bracketSize = size === "lg" ? 11 : 10;
  const pad = size === "lg" ? "4px 6px" : "3px 5px";

  return (
    <Link href="/" className="inline-flex items-center">
      <div className="relative inline-flex items-center" style={{ padding: pad }}>
        {/* Top-left */}
        <span style={{ position: "absolute", top: 0, left: 0, width: bracketSize, height: bracketSize, borderTop: "1.5px solid #00ff88", borderLeft: "1.5px solid #00ff88" }} />
        {/* Top-right */}
        <span style={{ position: "absolute", top: 0, right: 0, width: bracketSize, height: bracketSize, borderTop: "1.5px solid #00ff88", borderRight: "1.5px solid #00ff88" }} />
        {/* Bottom-left */}
        <span style={{ position: "absolute", bottom: 0, left: 0, width: bracketSize, height: bracketSize, borderBottom: "1.5px solid #00ff88", borderLeft: "1.5px solid #00ff88" }} />
        {/* Bottom-right */}
        <span style={{ position: "absolute", bottom: 0, right: 0, width: bracketSize, height: bracketSize, borderBottom: "1.5px solid #00ff88", borderRight: "1.5px solid #00ff88" }} />
        <span className="font-black tracking-tight" style={{ color: "#00ff88", fontSize }}>
          StakeArena
        </span>
      </div>
    </Link>
  );
}
