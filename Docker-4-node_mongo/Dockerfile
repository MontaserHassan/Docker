# Use the official Node.js image as the base image
FROM node:14-alpine as node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Node.js application
RUN npm run build

# -----

# Use the official MongoDB image as a secondary base image
FROM mongo:latest as mongo

# -----

# Use the official Nginx image as a third base image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Node.js application from the first stage
COPY --from=node /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]