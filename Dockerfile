FROM node:7.2.0-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app


# Install dependencies and run the file server
RUN npm install 

EXPOSE 8080
WORKDIR /usr/src/app/server
CMD  node app.js