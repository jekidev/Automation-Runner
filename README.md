# Automation Runner
Small persistent HTTP automation runner.

## API
- GET /health
- GET /jobs
- POST /jobs
- POST /jobs/:id/run
- GET /logs

Jobs currently support `runtime: "http"`, cron schedules, timeouts, exponential retries and overlap protection.

## Run
```bash
npm install
npm test
npm start
```

## Example job
```json
{"name":"Discord report","runtime":"http","url":"https://example.invalid/webhook","cron":"0 */5 * * *","maxRetries":3,"retryBackoffSeconds":5}
```

Secrets should be supplied by deployment environment; never commit webhook tokens or credentials.
