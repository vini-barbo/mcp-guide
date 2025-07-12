import { useQuery } from '@tanstack/react-query';
import { Guide, GuideFilters } from '../schema';
import { getGuides, getGuideById } from '../services/guide-service';

export function useGuides(filters?: GuideFilters) {
  return useQuery({
    queryKey: ['guides', filters],
    queryFn: () => getGuides(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGuide(id: string) {
  return useQuery({
    queryKey: ['guide', id],
    queryFn: () => getGuideById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGuideSearch(searchTerm: string) {
  return useQuery({
    queryKey: ['guides', 'search', searchTerm],
    queryFn: () => getGuides({ search: searchTerm }),
    enabled: searchTerm.length > 2,
    staleTime: 2 * 60 * 1000,
  });
}
