FROM node:16 as build
RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get autoremove --purge -y
RUN npm i npm@latest -g
WORKDIR /app
COPY . ./
RUN npm i
RUN npx webpack
FROM nginx:latest
RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get autoremove --purge -y
COPY --from=build /app/public /usr/share/nginx/html/cornell-notes-generator
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]