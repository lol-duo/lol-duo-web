# Step 1: Build the React app
FROM node:19 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Step 2: Run the React app
FROM node:14

WORKDIR /app

COPY --from=build /app/build /app/build
COPY package*.json ./
RUN npm install

EXPOSE 80

CMD ["npm", "start"]
