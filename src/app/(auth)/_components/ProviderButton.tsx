type ProviderButtonProps = {
  children: React.ReactNode;
};

export default function ProviderButton(props: ProviderButtonProps) {
  return (
    <div className='flex h-12 w-12 items-center justify-center border bg-white hover:drop-shadow-md'>
      {props.children}
    </div>
  );
}
