#!/bin/bash

# This script is used to start the development environment for the NestJS application.

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Start the Docker containers
docker-compose -f docker/docker-compose.yml up --build -d

# Run database migrations
docker-compose -f docker/docker-compose.yml exec app npm run migrate

# Start the NestJS application
docker-compose -f docker/docker-compose.yml exec app npm run start:dev

# Open Swagger UI in the default browser
xdg-open http://localhost:3000/api/docs || open http://localhost:3000/api/docs