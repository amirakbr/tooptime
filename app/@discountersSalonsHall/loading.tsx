'use client';

import HallDetailCardLoading from '../component/hallDetailCard/hallDetailCardLoading';

const Error = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold animate-pulse bg-slate-200/80 w-32 py-5 rounded"></h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 grid-rows-[20rem] gap-4">
        <HallDetailCardLoading />
        <HallDetailCardLoading />
        <HallDetailCardLoading />
        <HallDetailCardLoading />
      </div>
    </>
  );
};
export default Error;
