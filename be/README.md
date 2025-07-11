# NestJS Clean Architecture

This project is a NestJS application structured according to Clean Architecture principles. It utilizes TypeScript, PostgreSQL, and Prisma for data management, and Docker for both development and production environments. Swagger is integrated for API documentation.

## Project Structure

```
nestjs-clean-architecture
├── src
│   ├── main.ts                # Entry point of the application
│   ├── app.module.ts          # Root module of the application
│   ├── app.controller.ts       # Handles incoming requests
│   ├── app.service.ts          # Provides business logic
│   ├── common                  # Common utilities (decorators, filters, guards, interceptors, pipes)
│   ├── config                  # Configuration files (database, swagger)
│   ├── domain                  # Domain layer (entities, repositories, value objects)
│   ├── infrastructure          # Infrastructure layer (database, external services)
│   ├── application             # Application layer (DTOs, use cases, services)
│   └── presentation            # Presentation layer (controllers, middlewares)
├── test                        # Test files (end-to-end tests, utils)
├── docker                      # Docker configuration files
├── migrations                  # Database migrations
├── scripts                     # Scripts for development, building, and deployment
├── package.json                # NPM configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.build.json        # TypeScript build configuration
├── nest-cli.json              # Nest CLI configuration
├── .env                       # Environment variables
├── .env.example               # Example environment variables
├── .gitignore                 # Git ignore file
├── .dockerignore              # Docker ignore file
├── .eslintrc.js               # ESLint configuration
└── .prettierrc                # Prettier configuration
```

## Getting Started

### Prerequisites

- Node.js
- Docker
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nestjs-clean-architecture
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and update the values as needed.

### Running the Application

- For development:
  ```
  npm run start:dev
  ```

- For production:
  ```
  npm run build
  npm run start:prod
  ```

### Docker

To run the application using Docker, use the following command:
```
docker-compose up
```

### API Documentation

Swagger documentation is available at `http://localhost:3000/api`.

## Testing

To run the tests, use:
```
npm run test
```

## License

This project is licensed under the MIT License.