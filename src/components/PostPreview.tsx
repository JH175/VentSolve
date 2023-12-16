import Link from 'next/link';

type PostPreviewProps = {
  title: string;
  score: number;
  votes: number;
};

export default function PostPreview(props: PostPreviewProps) {
  let emoji = null;
  if (props.score > 80) {
    emoji = '💀';
  } else if (props.score >= 80) {
    emoji = '🤬';
  } else if (props.score >= 60) {
    emoji = '😡';
  } else if (props.score >= 40) {
    emoji = '😠';
  } else {
    emoji = '😞';
  }
  return (
    <Link href='/post/123123'>
      <div className='flex p-2 border rounded-md w-[30rem] justify-between bg-white drop-shadow-md hover:scale-110 duration-500'>
        <div className='text-lg'>Post Title (Pain Point)</div>
        <div className='flex items-center'>
          {props.votes}
          <span className='text-2xl'>{emoji}</span>
        </div>
      </div>
    </Link>
  );
}
