// Wires the real content collection CLAUDE.md calls for: "/content is
// the database". The articles live at the repo root (content/), not
// under src/content/<name>/, so this uses the glob loader's own base
// path instead -- nothing was moved, nothing was duplicated. The glob
// loader resolves `base` relative to the project root (astro.config.mjs's
// own directory), not relative to this file, so it's just "content".
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'content' }),
  schema: z.object({
    // Required, per docs/CONTENT-FORMAT.md.
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['article', 'note', 'talk', 'experiment', 'work']),
    threads: z.array(
      z.enum(['MEANING', 'GOVERNANCE', 'TRUST', 'PROXIMITY', 'MEMORY', 'CURIOSITY'])
    ),
    // Optional, degrade gracefully per docs/CONTENT-FORMAT.md. A blank
    // "key:" with nothing after it parses as YAML null, not undefined,
    // so these accept null too rather than failing validation.
    dek: z.string().nullable().optional(),
    image: z.string().nullable().optional(),
    family: z.enum(['void', 'lit']).default('void'),
    people: z.array(z.string()).default([]),
    question: z.string().nullable().optional(),
  }),
});

export const collections = { articles };
