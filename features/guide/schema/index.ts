import { z } from 'zod';

export const guideSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.enum(['basics', 'implementation', 'advanced']),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  estimatedTime: z.string(),
  tags: z.array(z.string()),
  content: z.object({
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
      codeExample: z.string().nullable(),
    })),
  }),
  prerequisites: z.array(z.string()),
  nextSteps: z.array(z.string()),
});

export const guidesArraySchema = z.array(guideSchema);

export type Guide = z.infer<typeof guideSchema>;
export type GuideSection = Guide['content']['sections'][0];

export const filterSchema = z.object({
  category: z.enum(['basics', 'implementation', 'advanced']).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  search: z.string().optional(),
});

export type GuideFilters = z.infer<typeof filterSchema>;
