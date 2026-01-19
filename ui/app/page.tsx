"use client";

import { useEffect, useState } from "react";

type Health = { status: string };

export default function Home() {
  const [health, setHealth] = useState<Health | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setErr(String(e)));
  }, []);

  if (err) return <main style={{ padding: 24 }}>API error: {err}</main>;
  if (!health) return <main style={{ padding: 24 }}>Checking API…</main>;

  return (
    <main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1>OpenLake</h1>
      <p>{health.status === "ok" ? "API healthy" : "API unhealthy"}</p>
    </main>
  );
}
