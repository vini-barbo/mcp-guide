// Environment configuration
export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  
  // Feature flags
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_SEARCH: process.env.NEXT_PUBLIC_ENABLE_SEARCH !== 'false',
  
  // API endpoints (for future use)
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
} as const;

// App configuration
export const config = {
  app: {
    name: 'MCP Guide',
    description: 'A comprehensive guide to Model Context Protocol',
    version: '1.0.0',
  },
  
  ui: {
    defaultTheme: 'light' as const,
    enableAnimations: true,
    enableSounds: false,
  },
  
  features: {
    search: {
      minSearchLength: 3,
      debounceMs: 300,
    },
    
    guides: {
      defaultPageSize: 12,
      maxTagsDisplay: 3,
    },
  },
} as const;

export type Config = typeof config;
export type Env = typeof env;
