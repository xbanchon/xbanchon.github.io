import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '{en,es}/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    team: z.string(),
    when: z.string(),
    stack: z.string(),
    result: z.string(),
    order: z.number(),
    // Drafts show up in `npm run dev` but are left out of the published site.
    draft: z.boolean().default(true),
  }),
});

export const collections = { caseStudies };
