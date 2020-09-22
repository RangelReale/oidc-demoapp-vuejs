# base image
FROM node:14.11-alpine AS build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

# install
RUN npm install

# Run entrypoint
ENTRYPOINT [ "sh", "docker-entrypoint.sh" ]
