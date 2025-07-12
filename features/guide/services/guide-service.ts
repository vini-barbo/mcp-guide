import { Guide, GuideFilters, guidesArraySchema } from '../schema';
import mockData from '../data/mock.json';

// Simulate API delay for realistic behavior
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getGuides(filters?: GuideFilters): Promise<Guide[]> {
  await delay(300); // Simulate network delay
  
  // Parse and validate mock data
  const guides = guidesArraySchema.parse(mockData);
  
  if (!filters) return guides;
  
  return guides.filter(guide => {
    const matchesCategory = !filters.category || guide.category === filters.category;
    const matchesDifficulty = !filters.difficulty || guide.difficulty === filters.difficulty;
    const matchesSearch = !filters.search || 
      guide.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      guide.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      guide.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });
}

export async function getGuideById(id: string): Promise<Guide | null> {
  await delay(200);
  
  const guides = guidesArraySchema.parse(mockData);
  return guides.find(guide => guide.id === id) || null;
}

export async function getGuidesByCategory(category: Guide['category']): Promise<Guide[]> {
  return getGuides({ category });
}

export async function searchGuides(searchTerm: string): Promise<Guide[]> {
  return getGuides({ search: searchTerm });
}
