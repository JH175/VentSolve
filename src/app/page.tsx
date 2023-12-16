import PostPreview from '@/components/PostPreview';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl'>Join the global fight against pain points.</h2>
      <div className='p-10 flex flex-col gap-2 justify-center items-center'>
        <PostPreview title='Post Title' score={100} votes={92} />
        <PostPreview title='Post Title' score={80} votes={20} />
        <PostPreview title='Post Title' score={60} votes={130} />
        <PostPreview title='Post Title' score={40} votes={18} />
        <PostPreview title='Post Title' score={20} votes={13} />
      </div>
    </div>
  );
}
