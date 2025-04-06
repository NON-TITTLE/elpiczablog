import Link from 'next/link';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/posts/${post.slug}`}>
        <div className="relative h-48">
          <img
            src={post.coverImage || '/mely/default-cover.jpg'}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
} 