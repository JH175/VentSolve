import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
import { getPosts } from '@/lib/getPosts';

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h2 className='text-2xl'>
        Vent problems and find solutions in the global war on pain points.
      </h2>
      <div className='flex flex-col items-center justify-center gap-2 p-10'>
        {posts?.map((post: any) => (
          <PostPreview
            key={post.id}
            title={post.title}
            score={post.score}
            votes={post.votes}
            tags={post.tags}
            bounty={false}
          />
        ))}
      </div>
      <Link
        href='/posts'
        className='text-lg text-orange-500 hover:text-orange-600'
      >
        See more posts...
      </Link>
    </div>
  );
}
