const SUBSTACK_URL = 'https://redisenar.substack.com';

export interface SubstackPost {
  title: string;
  description: string;
  link: string;
  author: string;
}

// Fetched at build time (static export) — articles refresh on each rebuild.
export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const response = await fetch(`${SUBSTACK_URL}/feed`, {
      headers: {
        Accept: 'application/rss+xml',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Substack: ${response.statusText}`);
    }

    const posts = parseRSSFeed(await response.text());

    if (posts.length === 0) {
      const apiResponse = await fetch(`${SUBSTACK_URL}/api/v1/archive`);
      if (apiResponse.ok) {
        type ArchivePost = {
          title: string;
          description?: string;
          subtitle?: string;
          slug: string;
          author?: string;
        };
        const apiPosts: ArchivePost[] = await apiResponse.json();
        return apiPosts.slice(0, 3).map((post) => ({
          title: post.title,
          description: post.description || post.subtitle || '',
          link: `${SUBSTACK_URL}/p/${post.slug}`,
          author: post.author || 'Carlos Octavio Graffi',
        }));
      }
    }

    return posts;
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return [];
  }
}

function parseRSSFeed(xml: string): SubstackPost[] {
  const posts: SubstackPost[] = [];
  try {
    const regex =
      /<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<description>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/description>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
      posts.push({
        title: decodeEntities(match[1].trim()),
        description: cleanDescription(decodeEntities(match[2].trim())),
        link: match[3].trim(),
        author: 'Rediseñar',
      });
    }
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
  }
  return posts.slice(0, 3);
}

function cleanDescription(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function decodeEntities(text: string): string {
  const entities: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&#39;': "'",
    '&#x2F;': '/',
    '&#x2f;': '/',
    '&#47;': '/',
    '&#xa0;': ' ',
    '&nbsp;': ' ',
    '&#241;': 'ñ',
    '&#225;': 'á',
    '&#233;': 'é',
    '&#237;': 'í',
    '&#243;': 'ó',
    '&#250;': 'ú',
    '&#191;': '¿',
    '&#161;': '¡',
  };
  return text.replace(/&[^;]+;/g, (match) => entities[match] || match);
}
