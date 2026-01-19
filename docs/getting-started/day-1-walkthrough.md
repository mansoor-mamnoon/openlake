# Day 1: System Bring-Up

This document describes the minimum system required to run OpenLake locally.

## Components
- API (FastAPI)
- UI (Next.js)
- Postgres (metadata)
- Optional: Redpanda, MinIO

## Bring-up

```bash
docker compose up -d --build
```

## Health checks

```bash
curl localhost:8000/health
curl localhost:3000/api/health
```

If both return `{"status":"ok"}`, the system is running correctly.

This document is kept in sync with the repository and acts as the canonical
"it works on my machine" reference.
