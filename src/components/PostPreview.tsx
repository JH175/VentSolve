import Link from 'next/link';

type PostPreviewProps = {
  title: string;
  score: number;
  votes: number;
  tags: string[];
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
      <div className='p-2 border rounded-md w-[30rem] bg-white drop-shadow-md hover:scale-110 duration-500'>
        <div className='flex  justify-between gap-2'>
          <div className='flex items-center'>
            <p>{props.title}</p>
          </div>
          <div className='flex items-center'>
            {props.votes}
            <span className='text-2xl'>{emoji}</span>
          </div>
        </div>
        <span className='text-teal-600'>
          {props.tags ? props.tags.map((tag) => '#' + tag + ' ') : null}
        </span>
      </div>
    </Link>
  );
}
