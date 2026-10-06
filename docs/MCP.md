# MCP control surface

The REST service is the execution plane. The intended MCP adapter maps tools to these routes:

| Tool | Route |
|---|---|
| create_job | POST /jobs |
| update_job | PATCH /jobs/:id |
| run_job | POST /jobs/:id/run |
| list_jobs | GET /jobs |
| get_job | GET /jobs/:id |
| enable_job | POST /jobs/:id/enable |
| disable_job | POST /jobs/:id/disable |
| delete_job | DELETE /jobs/:id |
| execution_logs | GET /logs?jobId=:id |
| retry_execution | POST /executions/:id/retry |
| health_check | GET /health |

Do not expose this service publicly without authentication. Secrets belong in environment variables.
