# my base image --> environment that will be used to run my app
FROM node:latest

# create folder in container for my app - So that my files are not in the void
WORKDIR /app

# copy my dependencies file from local to container 
COPY package.json .

# run this command in container 
RUN npm install

# copy all files and folders from local to container
COPY . .

# my app inside container will run on port 4000
EXPOSE 4000

# container command line
CMD ["npm", "start"]