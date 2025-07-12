# MCP Guide

A comprehensive guide to Model Context Protocol built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
mcp-guide/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with design tokens
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── features/              # Feature-as-a-Pack architecture
│   └── guide/            # Guide feature pack
│       ├── components/    # Local UI components
│       ├── hooks/        # useGuides, useGuide hooks
│       ├── services/     # API service layer
│       ├── schema/       # Zod validators
│       ├── store/        # Zustand slices
│       ├── utils/        # Feature-scoped helpers
│       ├── data/         # Mock data
│       ├── Page.tsx      # Main page component
│       └── index.ts      # Re-exports
├── components/           # Global reusable UI
│   └── ui/              # Base UI components
├── lib/                 # 3rd-party wrappers
├── utils/               # Global helpers
├── config/              # Environment & app config
└── styles/              # Design tokens
```

## 🏗️ Architecture Principles

### Feature-as-a-Pack
Each feature is self-contained with its own:
- Components (local UI)
- Hooks (data fetching & state)
- Services (API calls)
- Schema (validation)
- Store (state management)
- Utils (feature-specific helpers)

### Clean Code Guidelines
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid
- **YAGNI**: You Aren't Gonna Need It
- **≤400 lines per file**: Enforced file size limit

### Responsive Design
- **Mobile-first**: 360px → xl breakpoints
- **Flex/Grid utilities**: Layout with Tailwind
- **Semantic HTML**: Proper HTML5 elements
- **ARIA support**: WCAG 2.2 compliance
- **Focus outlines**: Always visible

## 🎨 Design System

### Color Palette
- **Neutral**: Zinc color scale
- **Primary**: Indigo via CSS custom properties
- **Dark mode**: Automatic support

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Consistent type scale
- **Line height**: Optimized for readability

### Components
- **Base**: Button, Card, Badge
- **Compound**: GuideCard with interactive states
- **Layout**: Responsive containers

## 🔧 Development

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build
```

### Key Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## 📦 Features

### Current Features
- **Guide Browsing**: Filter by difficulty and category
- **Interactive Cards**: Hover states and favorites
- **Progress Tracking**: Mark guides as completed
- **State Management**: Persistent filters and preferences
- **Responsive Design**: Mobile-first responsive layout

### Planned Features
- Guide detail pages
- Search functionality
- User authentication
- Progress analytics
- Comments and ratings

## 🛠️ State Management

### Zustand Store
```typescript
interface GuideState {
  filters: GuideFilters;
  currentGuide: Guide | null;
  completedGuides: string[];
  favoriteGuides: string[];
}
```

### TanStack Query
- Caching and background updates
- Optimistic updates
- Error handling
- Loading states

## 🎯 Performance

### Optimizations
- Server Components by default
- Client Components only when needed
- Image optimization (Next.js built-in)
- Font optimization (Google Fonts)
- Bundle splitting (automatic)

### Monitoring
- Core Web Vitals tracking
- Performance budgets
- Lighthouse CI (planned)

## 📱 Accessibility

### WCAG 2.2 Compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Color contrast ratios
- Screen reader support

## 🔒 Type Safety

### TypeScript
- Strict mode enabled
- Zod schema validation
- Type-safe API calls
- Component prop types

### Validation
```typescript
const guideSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  // ...
});
```

## 🎨 Styling

### Tailwind CSS 4
- Utility-first approach
- Custom design tokens
- Dark mode support
- Mobile-first responsive

### Component Patterns
```typescript
// Utility composition
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Variant-driven components
const buttonVariants = cva(baseStyles, { variants });
```

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Project setup and architecture
- ✅ Guide browsing and filtering
- ✅ Basic state management

### Phase 2
- 🔄 Guide detail pages
- 🔄 Advanced search
- 🔄 User preferences

### Phase 3
- ⏳ User authentication
- ⏳ Progress analytics
- ⏳ Community features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the coding guidelines
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.
