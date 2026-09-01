// Turns an article's raw markdown body into the reader's three block
// types, per docs/CONTENT-FORMAT.md and docs/FIELD-SPEC.md -- no new
// syntax, built around how the corpus already writes:
//
//   "## Subheads become beads on the nerve" -> heading blocks, each
//   with a stable id the spine's beads and the rail's links point at.
//
//   "A paragraph on its own under about ninety characters ... is a
//   callout" -> any standalone paragraph block short enough qualifies,
//   with no extra markup. Verified against the real corpus: this is
//   exactly how lines like "Data is love." already sit in the text.
//
// The 25 real articles were checked directly for markdown feature use:
// no bold, no lists but one, no links, no blockquotes, no code fences.
// A full markdown parser would be solving a problem this corpus does
// not have -- this handles **bold**, *italic* and the one real list,
// escapes everything else, and leaves plain prose alone.

export type ArticleBlock =
  | { type: 'heading'; id: string; text: string }
  | { type: 'callout'; html: string }
  | { type: 'paragraph'; html: string }
  | { type: 'list'; items: string[] };

const CALLOUT_MAX_LENGTH = 90;

function slugify(text: string, seen: Map<string, number>): string {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderInline(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
  return html;
}

export function parseArticleBody(raw: string): ArticleBlock[] {
  const blocks = raw
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  const seenIds = new Map<string, number>();
  const result: ArticleBlock[] = [];

  for (const block of blocks) {
    if (block.startsWith('## ')) {
      const text = block.slice(3).trim();
      result.push({ type: 'heading', id: slugify(text, seenIds), text });
      continue;
    }

    const listLines = block.split('\n').filter((l) => /^[-*]\s+/.test(l.trim()));
    if (listLines.length === block.split('\n').length) {
      result.push({
        type: 'list',
        items: listLines.map((l) => renderInline(l.trim().replace(/^[-*]\s+/, ''))),
      });
      continue;
    }

    const joined = block.split('\n').map((l) => l.trim()).join(' ');
    if (joined.length < CALLOUT_MAX_LENGTH) {
      result.push({ type: 'callout', html: renderInline(joined) });
      continue;
    }

    result.push({ type: 'paragraph', html: renderInline(joined) });
  }

  return result;
}

export function headingsOf(blocks: ArticleBlock[]) {
  return blocks.filter((b): b is Extract<ArticleBlock, { type: 'heading' }> => b.type === 'heading');
}
