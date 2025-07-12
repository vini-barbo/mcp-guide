import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Guide, GuideFilters } from '../schema';

interface GuideState {
  // Current filters
  filters: GuideFilters;
  setFilters: (filters: Partial<GuideFilters>) => void;
  clearFilters: () => void;
  
  // Currently viewed guide
  currentGuide: Guide | null;
  setCurrentGuide: (guide: Guide | null) => void;
  
  // Reading progress
  completedGuides: string[];
  markGuideAsCompleted: (guideId: string) => void;
  isGuideCompleted: (guideId: string) => boolean;
  
  // Favorites
  favoriteGuides: string[];
  toggleFavorite: (guideId: string) => void;
  isFavorite: (guideId: string) => boolean;
}

export const useGuideStore = create<GuideState>()(
  devtools(
    (set, get) => ({
      // Filters
      filters: {},
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
      clearFilters: () => set({ filters: {} }),
      
      // Current guide
      currentGuide: null,
      setCurrentGuide: (guide) => set({ currentGuide: guide }),
      
      // Progress tracking
      completedGuides: [],
      markGuideAsCompleted: (guideId) =>
        set((state) => ({
          completedGuides: state.completedGuides.includes(guideId)
            ? state.completedGuides
            : [...state.completedGuides, guideId],
        })),
      isGuideCompleted: (guideId) => get().completedGuides.includes(guideId),
      
      // Favorites
      favoriteGuides: [],
      toggleFavorite: (guideId) =>
        set((state) => ({
          favoriteGuides: state.favoriteGuides.includes(guideId)
            ? state.favoriteGuides.filter(id => id !== guideId)
            : [...state.favoriteGuides, guideId],
        })),
      isFavorite: (guideId) => get().favoriteGuides.includes(guideId),
    }),
    {
      name: 'guide-store',
    }
  )
);
