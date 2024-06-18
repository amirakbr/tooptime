import { getDisCountersHall } from '@/app/services/queries';
import HallDetailCard from '../../hallDetailCard';
import Link from 'next/link';

const DisCountersFields = async () => {
  let popularHalls = await getDisCountersHall().then(({ data }) => data);
  return (
    <>
      {popularHalls.length > 0 ? (
        <div className="flex flex-col gap-4 w-[95%] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">تخفیف دارها</h2>
            <Link href="/">
              <span className="text-lg border-b-2 border-b-black">مشاهده همه</span>
            </Link>
          </div>
          <div className="grid grid-cols-4 grid-rows-[20rem] gap-4">
            {popularHalls.map(
              ({ adress, cityName, hallName, complexName, discountPercent, discountedPrice, point, price, mainImageUrl, commentsCount, id }) => (
                <HallDetailCard
                  adress={adress}
                  id={id}
                  hallName={hallName}
                  complexName={complexName}
                  cityName={cityName}
                  mainImageUrl={mainImageUrl}
                  point={point}
                  price={price}
                  discountedPrice={discountedPrice}
                  discountPercent={discountPercent}
                  commentsCount={commentsCount}
                  key={`popular hall ${id}`}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <p>kir</p>
      )}
    </>
  );
};

export default DisCountersFields;
