import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One schema shared by every section. Fields are optional so a new entry only
// needs what it actually has. See README.md for the field reference.
const entry = z.object({
  title: z.string(),
  summary: z.string(),
  // Partial dates are fine: "2025", "2025-09" or "2025-09-30".
  // YAML turns a full date into a Date object, so accept both and keep it as text.
  date: z
    .union([z.string(), z.date()])
    .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v))
    .optional(),
  period: z.string().optional(),
  // verified = you have confirmed it; to-confirm = shown with a flag; in-progress = being written.
  status: z.enum(['verified', 'to-confirm', 'in-progress']).default('to-confirm'),
  organisation: z.string().optional(),
  role: z.string().optional(),
  contribution: z.string().optional(),
  partners: z.string().optional(),
  event: z.string().optional(),
  host: z.string().optional(),
  audience: z.string().optional(),
  topic: z.string().optional(),
  category: z.string().optional(),
  link: z.string().optional(),
  location: z.string().optional(),
  distance: z.string().optional(),
  movingTime: z.string().optional(),
  elapsedTime: z.string().optional(),
  elevation: z.string().optional(),
  finishTime: z.string().optional(),
  stravaId: z.string().optional(),
  stravaToken: z.string().optional(),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  credit: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  order: z.number().default(100),
});

const make = (folder: string) =>
  defineCollection({ loader: glob({ pattern: '**/*.md', base: `./src/content/${folder}` }), schema: entry });

export const collections = {
  communications: make('communications'),
  leadership: make('leadership'),
  writing: make('writing'),
  stage: make('stage'),
  outdoors: make('outdoors'),
};
