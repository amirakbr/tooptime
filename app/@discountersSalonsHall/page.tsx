import { getDisCountersHall } from '@/app/services/queries';
import HallDetailCard from '../component/hallDetailCard';
import Link from 'next/link';

const Page = async () => {
  let popularHalls = await getDisCountersHall().then(({ data }) => data);
  return (
    <>
      {popularHalls.length > 0 ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">تخفیف دارها</h2>
            <Link href="/">
              <span className="text-lg border-b-2 border-b-black">مشاهده همه</span>
            </Link>
          </div>
          <div className="grid grid-cols-4 grid-rows-[20rem] gap-4">
            {popularHalls.map(
              ({ address, cityName, hallName, complexName, discountPercent, discountedPrice, point, price, mainImage, commentsCount, id }) => (
                <HallDetailCard
                  address={address}
                  id={id}
                  hallName={hallName}
                  complexName={complexName}
                  cityName={cityName}
                  mainImage={mainImage}
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
        </>
      ) : (
        <p>kir</p>
      )}
    </>
  );
};

export default Page;
