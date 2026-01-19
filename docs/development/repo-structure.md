# Repository Structure

```
api/        # API container and entrypoint
ui/         # Web UI
src/openlake/
  api/      # FastAPI app
  core/     # storage, logs, query engine
  worker/   # streaming + pipelines
docs/       # documentation
```

Each directory has a single responsibility.
Cross-cutting logic lives in `core/`.
