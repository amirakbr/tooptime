import Link from 'next/link';
import SortIcon from '../component/icons/sortIcon';

const SortBasedOn = ({ sortType = 0 }: { sortType?: number }) => {
  const sortFilters = [
    { name: 'جدیدترین ها', value: 'new' },
    { name: 'محبوب ترین ها', value: 'popular' },
    { name: 'ارزان ترین ها', value: 'cheapest' },
    { name: 'گران ترین ها', value: 'mostExpensive' },
  ];
  return (
    <div className="flex container mx-auto justify-center bg-white px-2 py-1 border-4 border-darkPeach rounded-full ">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <SortIcon width={30} height={30} className="mt-1" />
          <p className="text-sm font-semibold hidden sm:block">مرتب سازی بر اساس:</p>
          <p className="text-sm font-semibold block sm:hidden">{sortFilters[sortType].name}</p>
        </div>
        <div className="flex items-center gap-3 hidden sm:flex">
          {sortFilters.map(({ name, value }) => (
            <Link className="py-3" href={'/'}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SortBasedOn;
