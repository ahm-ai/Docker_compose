FROM node:17-alpine AS development

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .


RUN ls
# RUN ["/bin/sh", "-c", "echo hello"]

EXPOSE 3000

# CMD ["yarn", "dev"]

