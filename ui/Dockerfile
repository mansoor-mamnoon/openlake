FROM node:20-alpine

WORKDIR /app
COPY ui/package.json /app/package.json
RUN npm install

COPY ui /app
EXPOSE 3000
CMD ["npm", "run", "dev"]
