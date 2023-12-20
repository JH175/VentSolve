import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
import { db } from '@/lib/db';

export default async function Home() {
  const posts = await db.post.findMany();
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h2 className='text-2xl'>Join the global fight against pain points.</h2>
      <div className='p-10 flex flex-col gap-2 justify-center items-center'>
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
        className='text-orange-500 hover:text-orange-600 text-lg'
      >
        See more posts...
      </Link>
    </div>
  );
}
