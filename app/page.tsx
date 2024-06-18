import { Metadata } from 'next';
import HeroSlider from './component/landingPage/heroSlider';
import ExpressSearch from './component/landingPage/expressSearch/expressSearch';
import PopularFields from './component/landingPage/popularFields';
import { Suspense } from 'react';
import HallDetailCardLoading from './component/hallDetailCard/hallDetailCardLoading';
import PopularFieldsLoading from './component/landingPage/popularFields/popularFieldsLoading';
import DisCountersFields from './component/landingPage/disCountersFileds';

export const metadata: Metadata = {
  title: 'toopita',
  description: 'reserve futsal salon',
};

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <HeroSlider />
        <ExpressSearch />
        <Suspense fallback={<PopularFieldsLoading />}>
          <PopularFields />
        </Suspense>
        <Suspense fallback={<PopularFieldsLoading />}>
          <DisCountersFields />
        </Suspense>
      </div>
    </div>
  );
}
