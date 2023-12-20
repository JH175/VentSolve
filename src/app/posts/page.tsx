import PostPreview from '@/components/PostPreview';
import { Post } from '@prisma/client';

const getPosts = async () => {
  const res = await fetch('http://localhost:3000/posts/api', {
    method: 'GET',
  });
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const { posts } = await getPosts();
  return (
    <div className='p-10 flex flex-col gap-2 justify-center items-center'>
      {Array.isArray(posts) &&
        posts.map((post: Post) => (
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
