'use client';

import Image from 'next/image';

const HallImage = ({ imageUrl, complexName, cityName }: { imageUrl: string; complexName: string; cityName: string }) => {
  return (
    <>
      <Image
        width={286}
        height={200}
        src={`https://tooptime.com/files/${imageUrl}`}
        alt={`عکس سالن ${complexName} در ${cityName}`}
        className="w-full h-full object-cover object-center"
      />
      {`https://${imageUrl}`}
    </>
  );
};

export default HallImage;
