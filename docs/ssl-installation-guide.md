# SSL Installation and HTTPS Guide

Waterhouse portals and internal dashboards should always be served over HTTPS in production.

## Recommended VPS Approach

Use Nginx and Let's Encrypt Certbot.

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d waterhousemgmt.com -d www.waterhousemgmt.com
```

Certbot installs an automatic renewal timer.

## Nginx Reverse Proxy Pattern

For the current dev-server deployment model:

- Main app: `127.0.0.1:6001`
- Redesign app: `127.0.0.1:6002`

Nginx can proxy public domains or paths to those local ports.

Production static hosting is preferable long-term:

- Build `dist/`.
- Build `dist-redesign/`.
- Serve static files directly through Nginx.

## Post-Install Checklist

- Confirm `https://` loads without mixed content warnings.
- Redirect HTTP to HTTPS.
- Enable HSTS after validation.
- Run SSL Labs test.
- Confirm portal login screens do not load insecure assets.

## Renewal Checks

```bash
sudo certbot renew --dry-run
systemctl list-timers | grep certbot
```

## Security Notes

HTTPS protects transport, not application authorization. The internal dashboard still needs server-side protection before it contains sensitive operational data.
