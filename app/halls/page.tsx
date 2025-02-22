import FiltersSection from "./filtersSection";
import HallBanner from "./hallBanner";
import SortBasedOn from "./sortBasedOn";

const Page = ({ searchParams }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <HallBanner />
      <div className="grid grid-cols-[1fr_3.5fr] w-[95%] mx-auto">
        <FiltersSection />
        <div>
          <SortBasedOn />
        </div>
      </div>
    </div>
  );
};

export default Page;
