import HallBanner from './hallBanner';
import SortBasedOn from './sortBasedOn';

const Page = ({ searchParams }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <HallBanner />
      <SortBasedOn />
    </div>
  );
};

export default Page;
