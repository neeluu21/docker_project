# DevOpsPulse

Modern Dockerized DevOps monitoring dashboard.

## Run

```bash
docker compose up --build -d
```

Frontend:
http://YOUR_EC2_PUBLIC_IP:8000

Backend health:
http://YOUR_EC2_PUBLIC_IP:5000/api/health

The frontend Nginx reverse-proxies `/api/*` to the backend container, so the browser does not need to call the backend directly.
