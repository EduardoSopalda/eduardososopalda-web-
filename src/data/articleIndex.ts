// Stable per-article catalogue numbers, No.01-No.25, derived from
// content/_index.json's own real `date` field (chronological, oldest
// first) -- not invented. Generated once by sorting the real content
// index and matching titles against fragments.ts's own `source`
// strings (normalizing curly vs. straight quotes, since the two files
// use different quote styles for the same titles). Regenerate by
// re-running that same sort/match if a new article is added -- do not
// hand-assign a number to a new entry, since that would break the
// "stable, chronological" property this is supposed to guarantee.
export const ARTICLE_CATALOG: Record<string, number> = {
  '“TODO EL MUNDO ES UN PAÍS” Everyone is a country… Inspired by Goya’s silent truths': 1,
  '"Can I Call You Uncle Too?" On unexpected mentors, timeless advice, and the art of never stopping learning': 2,
  'Crisis Management 101: The Morning Everything Went Wrong (and I Survived)': 3,
  '“Knowing the Ingredients Isn’t Enough” – The Scientific Method According to a Hibiscus Margarita': 5,
  'Strada Maestra: Lessons from an Italian Curve': 7,
  'Why the Smarter AI Isn\'t the One That Predicts': 8,
  'Speed Dating with AI: Shopping Around': 9,
  'Speed Dating with AI: Grok': 11,
  'Speed Dating with AI: ChatGPT': 12,
  'Speed-Dating with AI: The GitHub Copilot': 14,
  'Responsible AI in Times of Chaos: Why Trust Is Not a Feature': 17,
  'From Stewardship to Partnership: Why GenAI in Data Governance Is No Longer “The Future”': 19,
  'ATLAN´S Great Data Debate: DATA, Dashboards, AI, and the Fragility of Meaning': 20,
  'Starting the AI Journey: From First Wave to Business-Ready AI': 21,
  'When Governance Lives in Memory… and When It Becomes Muscle': 22,
  'If We Can’t Agree on “Customer,” How Can We Ever Govern Data?': 23,
  'The Data Is My Shepherd, I Shall Not Want': 24,
  'Ten Thousand Files, Two Thousand That Mattered': 25,
};

// content/_index.json's `title` field uses straight quotes throughout;
// the keys above keep fragments.ts's original curly-quote/backslash
// style. Normalize both sides through this before comparing titles from
// _index.json against this catalogue (used by /writing).
const normalizeQuotes = (s: string) =>
  s.replace(/\\'/g, "'").replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

const NORMALIZED_CATALOG: Record<string, number> = Object.fromEntries(
  Object.entries(ARTICLE_CATALOG).map(([k, v]) => [normalizeQuotes(k), v])
);

export function catalogNoForTitle(title: string): number | null {
  return NORMALIZED_CATALOG[normalizeQuotes(title)] ?? null;
}
