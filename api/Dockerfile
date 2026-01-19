FROM python:3.11-slim

WORKDIR /app

# Install uv (fast, minimal)
COPY pyproject.toml /app/pyproject.toml
RUN pip install --no-cache-dir uv

# Copy only src/tests after deps so builds cache well
COPY src /app/src

# Install runtime deps
RUN uv sync

EXPOSE 8000
CMD ["uv", "run", "uvicorn", "openlake.api.app:app", "--host", "0.0.0.0", "--port", "8000"]
