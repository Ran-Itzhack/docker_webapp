# Use Node 16 alpine as parent image
FROM node:20-alpine

# Change the working directory on the Docker image to /src
RUN apk update
RUN apk add vim

WORKDIR /src

# Copy package.json and package-lock.json to the /app directory
COPY package.json /src/

# Install dependencies
RUN npm install

# Copy the rest of project files into this image
COPY . .
	
# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

