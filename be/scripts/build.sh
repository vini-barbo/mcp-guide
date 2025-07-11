#!/bin/bash

# Build the NestJS application
npm run build

# Build the Docker image
docker build -t nestjs-clean-architecture .

# Run migrations
docker-compose run --rm app npm run migrate

# Start the application
docker-compose up -d