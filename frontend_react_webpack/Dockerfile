# Use Node 16 alpine as parent image
FROM node:20-alpine

# WORKDIR /src
# COPY package.json package-lock.json /src/
RUN apk update
RUN apk add vim

ARG REACT_APP_HELLO_1 
ARG REACT_APP_HELLO_2

ENV REACT_APP_HELLO_1=${REACT_APP_HELLO_1}
ENV REACT_APP_HELLO_2=$REACT_APP_HELLO_2

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy the rest of project files into this image
COPY ./ ./

# Copy package.json and package-lock.json to the /app directory
COPY package.json ./

# Install dependencies

RUN npm config set legacy-peer-deps true
RUN npm cache clean --force
RUN npm config set registry http://registry.npmjs.org
RUN npm install


# Expose application port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]

