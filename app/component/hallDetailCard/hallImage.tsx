'use client';

import Image from 'next/image';

const HallImage = ({ imageUrl, complexName, cityName }: { imageUrl: string; complexName: string; cityName: string }) => {
  return (
    <>
      <Image
        width={286}
        height={200}
        src={`https://${imageUrl}`}
        alt={`عکس سالن ${complexName} در ${cityName}`}
        className="w-full h-full object-cover object-center"
      />
    </>
  );
};

export default HallImage;
