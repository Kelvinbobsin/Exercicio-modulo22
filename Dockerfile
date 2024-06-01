FROM cypress/base:latest



WORKDIR /home/cypress



RUN apt-get update && apt-get upgrade -y



COPY . /home/cypress/



VOLUME [ "/home/cypress/report" ]



RUN npm install



CMD ["npm", "run", "test"]


