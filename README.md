# Automation Runner
Persistent HTTP automation runner for scheduled and webhook-triggered jobs.

## API
- GET /health
- GET /jobs
- POST /jobs
- GET/PATCH/DELETE /jobs/:id
- POST /jobs/:id/run
- POST /jobs/:id/enable
- POST /jobs/:id/disable
- POST /webhooks/:jobId
- GET /logs?jobId=...
- POST /executions/:executionId/retry

Jobs support `runtime: "http"`, cron schedules, timeouts, exponential retries and overlap protection.

## Run
```bash
npm install
npm test
npm start
```

## Example
```json
{"name":"Report","runtime":"http","url":"https://example.invalid/webhook","cron":"0 */5 * * *","maxRetries":3,"retryBackoffSeconds":5}
```

Deploy with the included Dockerfile / Render Blueprint. Keep credentials and webhook secrets in deployment environment variables; never commit them.
