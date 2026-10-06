# Automation Runner
Persistent HTTP automation runner with an MCP control endpoint.

## Endpoints
- GET /health — public hosting health check
- POST /mcp — MCP JSON-RPC endpoint
- GET/POST /jobs
- GET/PATCH/DELETE /jobs/:id
- POST /jobs/:id/run|enable|disable
- POST /webhooks/:jobId
- GET /logs?jobId=...
- POST /executions/:executionId/retry

When `RUNNER_TOKEN` is configured, every endpoint except `/health` requires `Authorization: Bearer <token>`. Do not expose a deployment without setting this secret.

## MCP
Supports `initialize`, `notifications/initialized`, `tools/list`, and `tools/call`. Tools: create/update/run/list/get/enable/disable/delete jobs, execution logs/retry, and health check.

## Run
```bash
npm install
npm test
RUNNER_TOKEN=change-me npm start
```

Jobs currently support HTTP execution, cron schedules, timeouts, exponential retries and overlap protection. Deploy with Docker/Render. Never commit credentials, webhook secrets or RUNNER_TOKEN.
