# docker build -t registry.home.blyberg.net/jb-site -t registry.home.blyberg.net/jb-site:1.0 .

# On M1/2
# docker buildx build --platform linux/amd64 --output type=docker -t registry.home.blyberg.net/jb-site -t registry.home.blyberg.net/jb-site:1.0 .

# docker push registry.home.blyberg.net/jb-site; docker push registry.home.blyberg.net/jb-site:1.0

# develop stage
FROM node:16 as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn
RUN quasar build

# production stage
FROM nginx:mainline-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
COPY --from=build-stage ./app/docker/nginx_default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]