# Step 1: Build the React app
FROM node:19 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]

