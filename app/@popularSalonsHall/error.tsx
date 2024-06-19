'use client';

import ErrorVector from '../component/icons/errorVector';

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-lg p-2">
      <p className="text-lg">دریافت لیست اماکن پر طرفدار با مشکل مواجه شد</p>
      <ErrorVector width={150} height={150} />
      <button className="border-2 border-peach border-solid py-2 px-6 rounded-lg" type="submit" role="button" onClick={() => reset()}>
        دریافت مجدد اطلاعات
      </button>
    </div>
  );
};
export default Error;
