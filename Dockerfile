# Step 1: Build the React app
FROM node:19 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

RUN npm install -g serve
RUN serve -s build



