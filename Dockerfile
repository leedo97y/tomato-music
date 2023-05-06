# syntax = docker/dockerfile:1

FROM debian:bullseye as builder

# Adjust NODE_VERSION as desired
ENV PATH=/usr/local/node/bin:$PATH
ARG NODE_VERSION=16.14.0

# Install packages needed to build node modules
RUN apt-get update; apt install -y curl python-is-python3 pkg-config build-essential && \
    curl -sL https://github.com/nodenv/node-build/archive/master.tar.gz | tar xz -C /tmp/ && \
    /tmp/node-build-master/bin/node-build "${NODE_VERSION}" /usr/local/node && \
rm -rf /tmp/node-build-master

RUN mkdir /app
WORKDIR /app

# Copy application code
COPY . .

# Build application
RUN npm install --production=false && npm run build

FROM debian:bullseye-slim

LABEL fly_launch_runtime="nodejs"

COPY --from=builder /usr/local/node /usr/local/node
COPY --from=builder /app /app

# NodeJS app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PATH /usr/local/node/bin:$PATH


# Start the server by default, this can be overwritten at runtime
CMD [ "npm", "run", "start" ]
