import PostPreview from '@/components/PostPreview';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h2 className='text-2xl'>Join the global fight against pain points.</h2>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <PostPreview
          title='Filling out an application after submitting a resume with the same information.'
          score={100}
          votes={92}
          tags={['hr', 'ux', 'hiring']}
        />
        <PostPreview
          title='Manual workflow, multiple forms, and no reliable tracking for international container shipments.'
          score={80}
          votes={20}
          tags={['shipping', 'business', 'freight']}
        />
        <PostPreview
          title='Tedious process and duplication of data in Excel every time information is required from multiple people.'
          score={60}
          votes={130}
          tags={['excel', 'software', 'data']}
        />
        <PostPreview
          title='Inefficient process to update and distribute company policies and documents.'
          score={40}
          votes={18}
          tags={['software', 'business']}
        />
        <PostPreview
          title='Lack of interoperability between PCR/EHR systems.'
          score={20}
          votes={13}
          tags={['software', 'healthcare']}
        />
        <Link
          href='/posts'
          className='text-orange-500 hover:text-orange-600 text-lg'
        >
          See more posts...
        </Link>
      </div>
    </div>
  );
}
