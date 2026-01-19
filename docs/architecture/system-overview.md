# System Overview

OpenLake is structured as a small number of cooperating services:

```
Browser
  ↓
UI (Next.js)
  ↓
API (FastAPI)
  ↓
Core services
  - metadata (Postgres)
  - storage (filesystem / object store)
  - query engine (DuckDB)
```

All user actions go through the API.
Even CLI commands call the API.

This ensures:

* consistent behavior
* easy auditing
* clean separation of concerns
