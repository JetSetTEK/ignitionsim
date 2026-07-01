import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles — buying guides, comparisons, how-tos, gear explainers, ecosystem
// upgrade paths, DIY. One folder per bay under src/content/articles/<bay>/.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),                       // meta description / SEO
    bay: z.enum(['racing', 'flight', 'space', 'marine', 'golf']),
    type: z.enum([
      'buying-guide', 'comparison', 'how-to', 'gear-explainer',
      'ecosystem-upgrade-path', 'diy',
    ]),
    primaryKeyword: z.string().optional(),
    author: z.string().default('Robert Pruitt'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),             // /images/... path
    heroAlt: z.string().optional(),
    excerpt: z.string().optional(),               // card teaser
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    goldStatus: z.enum(['certified', 'refresh', 'archived']).default('refresh'),
    goldCertifiedDate: z.coerce.date().optional(),
    sourceReviewDate: z.coerce.date().optional(),
    revenueTier: z.enum(['A', 'B', 'C']).default('B'),
    contentCluster: z.enum(['racing', 'golf', 'flight', 'space', 'marine', 'cross-sim']).optional(),
    readingTime: z.number().optional(),
    // FAQPage schema source — rendered EXPANDED on the page (never collapsed)
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // optional comparison table: { headers: [], rows: [[...]] }
    related: z.array(z.string()).default([]),     // slugs of related articles
  }),
});

export const collections = { articles };
