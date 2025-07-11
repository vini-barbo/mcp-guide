#!/bin/bash

# This script deploys the NestJS application to the production environment.

# Exit immediately if a command exits with a non-zero status.
set -e

# Build the application
echo "Building the application..."
npm run build

# Run migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Start the application
echo "Starting the application..."
docker-compose -f docker/docker-compose.prod.yml up -d --build

echo "Deployment completed successfully!"