FROM nginx:1.17.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY /dist/my-health /usr/share/nginx/html
