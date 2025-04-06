import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllPosts } from '../lib/posts';
import { Post } from '../types/post';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>El Pica Blog - Technology and More</title>
        <meta name="description" content="Personal blog about technology, development, and more" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Image
            src="/mely/avatar.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to El Pica Blog</h1>
          <p className="text-xl text-white/80 mb-6">
            Exploring technology, development, and everything in between
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/about" className="glass-card px-6 py-2 rounded-lg">
              About Me
            </Link>
            <Link href="/contact" className="glass-card px-6 py-2 rounded-lg">
              Contact
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 60, // Revalidate every minute
  };
};
