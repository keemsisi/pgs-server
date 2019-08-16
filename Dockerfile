FROM node:8
WORKDIR /pgs-api-server
COPY package.json /pgs-api-server
ADD . /pgs-api-server
RUN npm install
RUN mkdir -p /tmp/cu && chmod -R 777 /tmp/cu
CMD node server.app.js
EXPOSE 8081
EXPOSE 9091