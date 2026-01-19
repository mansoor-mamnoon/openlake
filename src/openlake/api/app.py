from fastapi import FastAPI

app = FastAPI(title="OpenLake API", version="0.0.0")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
