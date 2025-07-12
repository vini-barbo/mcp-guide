'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star, BookOpen } from 'lucide-react';
import { Guide } from '../schema';
import { useGuideStore } from '../store/guide-store';
import { cn } from '@/lib/utils';

interface GuideCardProps {
  guide: Guide;
  onSelect?: (guide: Guide) => void;
  className?: string;
}

export function GuideCard({ guide, onSelect, className }: GuideCardProps) {
  const { isFavorite, toggleFavorite, isGuideCompleted } = useGuideStore();
  
  const isCompleted = isGuideCompleted(guide.id);
  const isFav = isFavorite(guide.id);
  
  const getDifficultyColor = (difficulty: Guide['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card 
      className={cn(
        'group cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]',
        isCompleted && 'ring-2 ring-green-200 bg-green-50/50',
        className
      )}
      onClick={() => onSelect?.(guide)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {guide.title}
            </CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {guide.description}
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(guide.id);
            }}
          >
            <Star 
              className={cn(
                'h-4 w-4 transition-colors',
                isFav ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
              )} 
            />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge 
            variant="outline" 
            className={getDifficultyColor(guide.difficulty)}
          >
            {guide.difficulty}
          </Badge>
          <Badge variant="secondary" className="capitalize">
            {guide.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{guide.estimatedTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {guide.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {guide.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{guide.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {isCompleted && (
            <div className="flex items-center gap-1 text-sm text-green-600">
              <BookOpen className="h-3 w-3" />
              <span>Completed</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
