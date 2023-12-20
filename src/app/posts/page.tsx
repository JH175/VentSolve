import PostPreview from '@/components/PostPreview';
import { getPosts } from '@/lib/getPosts';
import { Post } from '@prisma/client';

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-10'>
      {posts?.map((post: Post) => (
        <PostPreview
          key={post.id}
          title={post.title}
          score={post.score}
          votes={post.votes}
          bounty={false}
          tags={[]}
        />
      ))}
    </div>
  );
}
