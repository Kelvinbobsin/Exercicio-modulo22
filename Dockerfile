FROM cypress/base:latest

WORKDIR /home/cypressl

RUN apt-get update

COPY . /home/cypress/

VOLUME [ "/home/cypress/report" ]

RUN npm install

CMD ["npm", "run", "test"]
