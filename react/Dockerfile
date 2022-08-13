FROM node:17-alpine AS development

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .
# ADD . .

EXPOSE 3000

CMD ["npm", "run","dev"]