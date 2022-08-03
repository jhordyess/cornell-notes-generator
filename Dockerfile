FROM node:16 as build
RUN apt-get update --no-install-recommends \
  && apt-get upgrade -y \
  && apt-get autoremove --purge -y
RUN npm i npm@latest -g
WORKDIR /app
COPY . ./
RUN npm i
RUN npx webpack --mode production

FROM nginx:latest
RUN apt-get update --no-install-recommends \
  && apt-get upgrade -y \
  && apt-get autoremove --purge -y
COPY --from=build /app/docs /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]