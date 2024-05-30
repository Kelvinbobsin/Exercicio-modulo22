FROM cypress/base:latest

WORKDIR /home/cypressl

RUN apt-get update

COPY . /home/cypress/

VOLUME [ "/home/cypress/report" ]

CMD ["npm", "run", "test"]
