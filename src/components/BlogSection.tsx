'use client';

import { motion } from 'framer-motion';
import BlogPost from '@/components/BlogPost';
import type { SubstackPost } from '@/lib/substack';

const FALLBACK_POSTS: SubstackPost[] = [
  {
    title: 'Sample Blog Post',
    author: 'Author Name',
    description: 'This is a sample blog post while we connect to Substack.',
    link: '#',
  },
  {
    title: 'Another Blog Post',
    author: 'Author Name',
    description: 'This is another sample blog post.',
    link: '#',
  },
  {
    title: 'Third Blog Post',
    author: 'Author Name',
    description: 'This is a third sample blog post.',
    link: '#',
  },
];

export default function BlogSection({ posts }: { posts: SubstackPost[] }) {
  const items = posts.length > 0 ? posts : FALLBACK_POSTS;

  return (
    <section className="py-16 md:py-24 lg:py-32" aria-labelledby="blog-section-title">
      <motion.h2
        id="blog-section-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl mb-24 text-center"
      >
        Articles
      </motion.h2>
      <div
        className="space-y-24 max-w-2xl mx-auto"
        role="feed"
        aria-label="Lista de artículos del blog"
      >
        {items.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
