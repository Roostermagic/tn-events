FROM node:8.11.3-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --pure-lockfile

COPY src ./src

ENV PORT 80
EXPOSE 80

CMD ["yarn", "dev"]