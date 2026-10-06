FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN mkdir -p /app/data
ENV DATA_FILE=/app/data/jobs.json
EXPOSE 3000
CMD ["npm","start"]
