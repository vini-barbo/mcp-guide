import { Guide } from '../schema';
import { useGuides } from '../hooks/use-guides';
import { useGuideStore } from '../store/guide-store';
import { GuideCard } from '../components/guide-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Search, Filter, BookOpen, Clock, Target } from 'lucide-react';

export default function GuidePage() {
  const { filters, setFilters, clearFilters } = useGuideStore();
  const { data: guides, isLoading, error } = useGuides(filters);
  
  const handleGuideSelect = (guide: Guide) => {
    // Navigate to guide detail - in a real app this would use Next.js router
    console.log('Selected guide:', guide.id);
  };
  
  const stats = guides ? {
    total: guides.length,
    beginner: guides.filter(g => g.difficulty === 'beginner').length,
    intermediate: guides.filter(g => g.difficulty === 'intermediate').length,
    advanced: guides.filter(g => g.difficulty === 'advanced').length,
  } : null;

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading guides...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Failed to load guides. Please try again later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">MCP Guides</h1>
            <p className="text-muted-foreground">
              Learn Model Context Protocol step by step
            </p>
          </div>
          
          {stats && (
            <div className="flex gap-2">
              <Badge variant="outline" className="gap-1">
                <BookOpen className="h-3 w-3" />
                {stats.total} guides
              </Badge>
            </div>
          )}
        </div>
        
        {/* Quick Stats */}
        {stats && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Beginner</p>
                  <p className="text-2xl font-bold">{stats.beginner}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-600" />
                <div>
                  <p className="text-sm font-medium">Intermediate</p>
                  <p className="text-2xl font-bold">{stats.intermediate}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-red-600" />
                <div>
                  <p className="text-sm font-medium">Advanced</p>
                  <p className="text-2xl font-bold">{stats.advanced}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Total</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <h3 className="font-medium">Filters</h3>
            {Object.keys(filters).length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.difficulty === 'beginner' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilters({ 
                difficulty: filters.difficulty === 'beginner' ? undefined : 'beginner' 
              })}
            >
              Beginner
            </Button>
            <Button
              variant={filters.difficulty === 'intermediate' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilters({ 
                difficulty: filters.difficulty === 'intermediate' ? undefined : 'intermediate' 
              })}
            >
              Intermediate
            </Button>
            <Button
              variant={filters.difficulty === 'advanced' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilters({ 
                difficulty: filters.difficulty === 'advanced' ? undefined : 'advanced' 
              })}
            >
              Advanced
            </Button>
            <div className="w-px h-6 bg-border mx-2" />
            <Button
              variant={filters.category === 'basics' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilters({ 
                category: filters.category === 'basics' ? undefined : 'basics' 
              })}
            >
              Basics
            </Button>
            <Button
              variant={filters.category === 'implementation' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilters({ 
                category: filters.category === 'implementation' ? undefined : 'implementation' 
              })}
            >
              Implementation
            </Button>
          </div>
        </div>
      </Card>

      {/* Guides Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          {Object.keys(filters).length > 0 ? 'Filtered Results' : 'All Guides'}
        </h2>
        
        {guides && guides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                onSelect={handleGuideSelect}
              />
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Search className="h-8 w-8 text-muted-foreground" />
              <h3 className="font-medium">No guides found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or search terms
              </p>
              {Object.keys(filters).length > 0 && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear filters
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
