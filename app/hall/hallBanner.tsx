import Image from 'next/image';

const HallBanner = () => {
  return (
    <div className="bg-slate-500 relative max-h-[20rem] relative">
      <div className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col justify-center gap-10 text-black text-center w-3/4 h-3/4 word-wrap p-2 rounded-2xl bg-slate-200/30 backdrop-blur-sm border-2 border-darkerPeach">
        <h2 className="text-4xl font-bold">اماکن ورزشی</h2>
        <span className="text-xl font-medium">مکان ورزشی خود را در کوتاه ترین زمان پیدا کنید</span>
      </div>
      <Image width={700} height={700} src="/hallBanner.png" alt={'tst'} className="object-cover object-center !w-full !h-[20rem]" />
    </div>
  );
};
export default HallBanner;
