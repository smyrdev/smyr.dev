import { defineCollection, z } from 'astro:content';
// 1. Import the glob loader from the new location
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    // 2. Point the loader to your markdown/mdx files inside src/content/blog
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      datetime: z.string(),
      image: z.string().optional(),
      type: z.string().default('Article'),
      time_to_read: z.number().default(5),
      level: z.string().default('Beginner'),
      category: z.string().default('General'),
      tags: z.array(z.string()).default([]),
    }),
});

// Feeds the "building" section on the home page. There are no /works
// routes any more, so the fields below the fold (role, stack, problem…)
// go unread — they are kept so a case-study page can be restored without
// re-authoring the frontmatter.
const worksCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/works" }),
    schema: z.object({
      title: z.string(),
      // The single line that sits under the title on the card.
      blurb: z.string(),
      // product · open source · case study · experiment
      type: z.string().default('project'),
      year: z.string().optional(),
      // Lower sorts first; the home strip takes the first three featured.
      order: z.number().default(0),
      featured: z.boolean().default(false),
      // External destination. Omit and the entry links to its own case study.
      href: z.string().optional(),
      linkLabel: z.string().default('read →'),
      // Secondary link shown on the works index (e.g. source for a product).
      repo: z.string().optional(),
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      status: z.string().optional(),
      // problem → approach → outcome, surfaced above the body on the detail page
      problem: z.string().optional(),
      approach: z.string().optional(),
      outcome: z.string().optional(),
    }),
});

// Short quotes on the home page. The quote lives in frontmatter rather
// than the body: it is rendered as a single paragraph wrapped in accent
// quote marks, which a rendered markdown body would fight.
const snippetsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/snippets" }),
    schema: z.object({
      quote: z.string(),
      // Where it came from — "note to self", "code review", "on training".
      source: z.string(),
      datetime: z.string(),
      // Optional link out to the thread it was posted in.
      href: z.string().optional(),
      hrefLabel: z.string().default('thread →'),
    }),
});

export const collections = {
  'blog': blogCollection,
  'works': worksCollection,
  'snippets': snippetsCollection,
};
