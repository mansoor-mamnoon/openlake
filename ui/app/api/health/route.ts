export async function GET() {
  const base = process.env.OPENLAKE_API_INTERNAL ?? "http://api:8000";
  const r = await fetch(`${base}/health`, { cache: "no-store" });
  const data = await r.json();
  return Response.json(data, { status: r.status });
}
