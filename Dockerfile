FROM node:9-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install packages and cache them if package.json is unchanged
COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile

COPY . /usr/src/app

ENV NODE_ENV=production \
    TS_NODE_FAST=true \
    TS_NODE_CACHE_DIRECTORY=./bin \
    TS_NODE_COMPILER_OPTIONS='{"target":"es2015", "module": "commonjs"}' \
    PORT=3000

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]