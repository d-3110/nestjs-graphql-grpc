FROM node:18
RUN npm i -g @nestjs/cli
WORKDIR /api
CMD ["npm", "run", "start:dev"]
