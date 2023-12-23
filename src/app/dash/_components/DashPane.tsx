'use client';

import PostPreview from '@/components/PostPreview';
import { useState } from 'react';

export default function DashPane() {
  const activeButtonClass = 'border-b border-teal-500';
  const [displayMode, setDisplayMode] = useState('posts');
  return (
    <div>
      <div className='flex justify-center gap-5'>
        <button
          className={`${displayMode === 'posts' && activeButtonClass}`}
          onClick={() => setDisplayMode('posts')}
        >
          My Posts
        </button>
        <button
          className={`${displayMode === 'following' && activeButtonClass}`}
          onClick={() => setDisplayMode('following')}
        >
          Following
        </button>
      </div>
      <div>
        {displayMode === 'posts' ? (
          <div className='flex flex-col gap-5 p-5'>
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
