import PostPreview from '@/components/PostPreview';
import Link from 'next/link';

export default function Posts() {
  return (
    <div className='p-10 flex flex-col gap-2 justify-center items-center'>
      <PostPreview
        title='Filling out an application after submitting a resume with the same information.'
        score={100}
        votes={92}
        tags={['hr', 'ux', 'hiring']}
        bounty={true}
      />
      <PostPreview
        title='Manual workflow, multiple forms, and no reliable tracking for international container shipments.'
        score={80}
        votes={20}
        tags={['shipping', 'business', 'freight']}
        bounty={false}
      />
      <PostPreview
        title='Tedious process and duplication of data in Excel every time information is required from multiple people.'
        score={60}
        votes={130}
        tags={['excel', 'software', 'data']}
        bounty={true}
      />
      <PostPreview
        title='Inefficient process to update and distribute company policies and documents.'
        score={40}
        votes={18}
        tags={['software', 'business']}
        bounty={false}
      />
      <PostPreview
        title='Lack of interoperability between PCR/EHR systems.'
        score={20}
        votes={13}
        tags={['software', 'healthcare']}
        bounty={false}
      />
      <PostPreview
        title='Filling out an application after submitting a resume with the same information.'
        score={100}
        votes={92}
        tags={['hr', 'ux', 'hiring']}
        bounty={true}
      />
      <PostPreview
        title='Manual workflow, multiple forms, and no reliable tracking for international container shipments.'
        score={80}
        votes={20}
        tags={['shipping', 'business', 'freight']}
        bounty={false}
      />
      <PostPreview
        title='Tedious process and duplication of data in Excel every time information is required from multiple people.'
        score={60}
        votes={130}
        tags={['excel', 'software', 'data']}
        bounty={true}
      />
      <PostPreview
        title='Inefficient process to update and distribute company policies and documents.'
        score={40}
        votes={18}
        tags={['software', 'business']}
        bounty={false}
      />
      <PostPreview
        title='Lack of interoperability between PCR/EHR systems.'
        score={20}
        votes={13}
        tags={['software', 'healthcare']}
        bounty={false}
      />
    </div>
  );
}
