FROM node:10.11.0-alpine

WORKDIR /usr/src/app

# Needed for wait-for-postgres, wait-for-it
RUN apk --update add postgresql-client bash

COPY package*.json ./
RUN npm config set unsafe-perm true
RUN npm install
RUN npm install -g knex

RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    mv wait-for-it.sh /bin/wait-for-it.sh && \
    chmod 777 /bin/wait-for-it.sh

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]