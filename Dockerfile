FROM node:lts
RUN mkdir -p /app
WORKDIR /app
RUN npm install express
COPY app.js .
CMD ["node", "app.js"]
