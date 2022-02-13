FROM node:latest

ENV PORT=4000

RUN mkdir /app

# cd /app
WORKDIR /app 

# Copy all needed files
COPY . /app

# Install all dependecies
RUN yarn install

# Run application
CMD ["yarn", "start"]