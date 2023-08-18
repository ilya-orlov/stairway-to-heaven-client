# syntax=docker/dockerfile:1

# STAGE 1: build app inside a node image
FROM node:18-alpine As build
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# STAGE 2: copy built files from node image into nginx image
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/stairway-to-heaven-client /usr/share/nginx/html
VOLUME /123
