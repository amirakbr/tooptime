import { Metadata } from 'next';
import HeroSlider from './component/landingPage/heroSlider';
import ExpressSearch from './component/landingPage/expressSearch/expressSearch';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'toopita',
  description: 'reserve futsal salon',
};

export default function Home({ discountersSalonsHall }: { discountersSalonsHall: ReactNode }) {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <HeroSlider />
        <ExpressSearch />
      </div>
    </div>
  );
}
