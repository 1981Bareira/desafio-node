FROM node:15

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000
RUN npm install express --save
RUN npm install mysql2 --save
CMD ["node","index.js"]
