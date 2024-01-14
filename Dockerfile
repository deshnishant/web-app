FROM node:latest

WORKDIR /F:/angular-projects/web-app

COPY ./ /F:/angular-projects/web-app

RUN npm build

RUN npm run build

FROM nginx:latest

COPY --from=build /F:/angular-projects/web-app/dist/web-app /usr/share/nginx/html

EXPOSE 80