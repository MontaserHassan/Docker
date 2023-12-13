# first stage: build dockerAngular image
# build as alias to next steps
FROM node:alpine3.14 as build

# create directory (-p --> used to create file if not exists)
RUN mkdir -p /app

# set working directory (where i stoped)
WORKDIR /app

COPY package.json /app/

# inside this image, this command will run to install application dependinces
RUN npm install

# copy from source to app folder
COPY . /app/

# will build angular production boundle
RUN npm run build --prod

# -------------------------------------------------------

# second stage: web server

FROM nginx:alpine

# move files from build image to nginx alpine
COPY --from=build /app/dist/dockerAngular /usr/share/nginx/html
