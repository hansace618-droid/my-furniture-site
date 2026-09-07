import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { products };
