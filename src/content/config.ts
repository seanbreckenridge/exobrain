import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  // type-check frontmatter using schema
  schema: z.object({
    title: z.string(),
  }),
});

const journal = defineCollection({
  type: "content",
  schema: z.object({
    date: z.number().transform((val) => new Date(val * 1000)),
  }),
});

export const collections = { blog, notes, journal };
