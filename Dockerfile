FROM node:8
WORKDIR /pgs-api-server
COPY package.json .
ADD . .
RUN npm install
RUN mkdir -p /tmp/cu && chmod -R 777 /tmp/cu
CMD node server.app.js
RUN npm install helmet --save
EXPOSE 8081
EXPOSE 9091