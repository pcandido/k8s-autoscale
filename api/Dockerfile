FROM node

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY index.js ./

CMD ["node", "index.js"]