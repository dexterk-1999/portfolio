import { getCollection } from 'astro:content';

export type Section = {
  key: string;
  slug: string; // permanent URL segment
  collection?: 'communications' | 'leadership' | 'writing' | 'stage' | 'outdoors';
  n: string;
  title: string;
  short: string;
  intro: string;
};

export const sections: Section[] = [
  {
    key: 'communications', slug: 'communications', collection: 'communications', n: '01',
    title: 'Communications & public relations', short: 'Communications',
    intro: 'The core of the portfolio. Each case study follows the same shape: the communication challenge, the strategy, the audiences, what was delivered, what changed, and exactly what was mine.',
  },
  {
    key: 'creative', slug: 'creative-studio', n: '02',
    title: 'The Creative Studio', short: 'Creative Studio',
    intro: 'Image-led design work, mostly built in Canva, grouped by category and shown as it is.',
  },
  {
    key: 'writing', slug: 'writing', collection: 'writing', n: '03',
    title: 'Writing & ideas', short: 'Writing',
    intro: 'Essays and observations, including pieces from Fragments of Insights. Where something was published elsewhere, it links to the original.',
  },
  {
    key: 'leadership', slug: 'leadership', collection: 'leadership', n: '04',
    title: 'Leadership & community impact', short: 'Leadership',
    intro: 'What was built, with whom, and what changed, across Rotaract, RYLA and Rotary International.',
  },
  {
    key: 'stage', slug: 'the-stage', collection: 'stage', n: '05',
    title: 'The Stage', short: 'The Stage',
    intro: 'MC, panel moderation and public speaking. Each engagement lists the event, host, date, audience and topic.',
  },
  {
    key: 'outdoors', slug: 'outdoors', collection: 'outdoors', n: '06',
    title: 'Beyond the desk', short: 'Outdoors',
    intro: 'Field notes from running and hiking. The numbers sit beside what the day was like.',
  },
];

export const bySlug = (slug: string) => sections.find((s) => s.slug === slug)!;
export const byKey = (key: string) => sections.find((s) => s.key === key)!;

export const statusLabel: Record<string, string> = {
  verified: 'Verified',
  'to-confirm': 'Needs confirmation',
  'in-progress': 'In progress',
};

export async function entriesFor(key: Section['collection']) {
  const all = await getCollection(key!);
  return all.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return (b.data.date ?? '').localeCompare(a.data.date ?? '');
  });
}

export const entryUrl = (section: Section, id: string) => `/${section.slug}/${id}/`;

export function formatDate(d?: string) {
  if (!d) return undefined;
  const parts = d.split('-').map(Number);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (parts.length === 1) return String(parts[0]);
  if (parts.length === 2) return `${months[parts[1] - 1]} ${parts[0]}`;
  return `${parts[2]} ${months[parts[1] - 1]} ${parts[0]}`;
}
