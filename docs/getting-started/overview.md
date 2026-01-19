# OpenLake Overview

OpenLake is a local-first, single-node lakehouse system that combines:

- versioned tables (Delta-like)
- SQL querying (DuckDB)
- pipelines and orchestration
- experiment tracking (MLflow-lite)

The goal is to make data + ML systems **reproducible, inspectable, and hackable**
without requiring a distributed cluster.

OpenLake is intentionally:
- single-node (v0)
- explicit over magical
- API-driven
