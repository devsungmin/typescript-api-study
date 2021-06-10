FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install -y
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000