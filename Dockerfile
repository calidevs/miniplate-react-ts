# get the latest node alpine image from the registry
FROM node:alpine AS build-stage

# Sets work directory as /app
WORKDIR /app

# Copies files that starts with file name package
COPY package*.json ./

# Installs all the node packages and dependencies
RUN npm install

# Copies the current dir recursively to the container
COPY . .

# Create a react build
RUN npm run build

# Get the latest alpine image from the registry
FROM nginx:alpine


# Copies output from first stage which is our react build into nginx html dir
COPY --from=build-stage /app/dist /usr/share/nginx/html

# exposes the app on port 80 in the container
EXPOSE 80





