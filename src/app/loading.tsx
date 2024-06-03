import Image from 'next/image';
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <Image
        src={'/loading-spinner.gif'}
        height={50}
        width={50}
        alt={'spinner'}
      />
      <p>Loading</p>
    </>
  );
}
