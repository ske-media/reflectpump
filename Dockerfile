# Use a simple static‑server image
FROM nginx:alpine
COPY . /usr/share/nginx/html
