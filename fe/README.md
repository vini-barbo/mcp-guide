# Next.js 15 Project with TypeScript, Tailwind 4, and shadcn/ui

This project is a Next.js 15 application built with TypeScript and styled using Tailwind CSS 4. It also incorporates the shadcn/ui component library for enhanced UI components.

## Project Structure

```
nextjs-app
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── ui
│   │       └── button.tsx
│   └── lib
│       └── utils.ts
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── docker
│   ├── Dockerfile.dev
│   └── Dockerfile.prod
├── .env.local
├── .gitignore
├── components.json
├── docker-compose.yml
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- Docker (for containerized development)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nextjs-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Development

To start the development server, run:
```
npm run dev
```

This will start the Next.js application in development mode.

### Docker Setup

To run the application using Docker, you can use the provided Docker Compose configuration.

1. Build and run the containers:
   ```
   docker-compose up --build
   ```

2. Access the application at `http://localhost:3000`.

### Production

To build the application for production, run:
```
npm run build
```

Then, you can run the production Docker container using:
```
docker-compose -f docker-compose.yml up
```

### Usage

- The main entry point of the application is located in `src/app/page.tsx`.
- Global styles can be found in `src/app/globals.css`.
- Reusable UI components are located in `src/components/ui/`.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.