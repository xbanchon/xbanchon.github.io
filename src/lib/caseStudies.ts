import { getCollection } from 'astro:content';
import type { Locale } from '../i18n/content';

export async function getCaseStudies(locale: Locale) {
  const entries = await getCollection(
    'caseStudies',
    ({ id, data }) => id.startsWith(`${locale}/`) && (import.meta.env.DEV || !data.draft),
  );
  return entries
    .map((entry) => ({ entry, slug: entry.id.slice(locale.length + 1) }))
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}
