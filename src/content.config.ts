import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    featured_image: z.string().optional(),
  }),
});

export const collections = { research };
