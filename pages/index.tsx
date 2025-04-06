import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 float">
            ElPicza Blog
          </h1>
          <p className="text-xl text-gray-400 fade-in">Developer & Crypto Content Creator</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(({ slug, title, date }, index) => (
            <Link 
              href={`/${slug}`} 
              key={slug}
              className="post-card group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {title}
              </h2>
              <p className="text-gray-400">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.md$/, '');
    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  return { props: { posts } };
}
