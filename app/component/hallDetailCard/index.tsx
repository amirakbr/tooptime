'use client';
import { IPopularHallResult } from '@/app/services/queries/interface';
import Image from 'next/image';
import HallImage from './hallImage';
import { convertToFarsiDigits } from '@/app/utils/formatNumber';
import StartIcon from '../icons/starIcon';
import LocationIcon from '../icons/locationIcon';
import PriceIcon from '../icons/priceIcon';

const HallDetailCard = ({
  adress,
  cityName,
  commentsCount,
  complexName,
  discountPercent,
  discountedPrice,
  hallName,
  id,
  mainImageUrl,
  point,
  price,
}: Omit<IPopularHallResult, 'width' | 'sportsFieldNames' | 'sex' | 'options' | 'imageUrls' | 'height' | 'detailsOfFirstReservableTime'>) => {
  return (
    <div className="flex flex-col gap-4 p-2 rounded-lg border-4 border-darkPeach bg-white">
      <div className="overflow-hidden rounded relative">
        {discountPercent > 0 ? (
          <div className="absolute top-4 right-4 flex items-center justify-center gap-2 bg-green-800/50 backdrop-blur-sm rounded-lg text-lg text-white px-1 h-6 w-12">
            <span className="mt-2">٪</span>
            <span className="mt-2">{convertToFarsiDigits(`${discountPercent}`)}</span>
          </div>
        ) : null}
        <HallImage cityName={cityName} complexName={complexName} imageUrl={mainImageUrl} />
        <div className="absolute top-4 left-4 flex items-center justify-center gap-2 bg-slate-500/50 backdrop-blur-sm rounded-lg text-lg text-white px-1 h-6 w-12">
          <StartIcon width={10} height={10} />
          <span className="mt-2">{convertToFarsiDigits(`${point}`)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{convertToFarsiDigits(hallName)}</h3>
        <div className="flex items-center gap-2 text-lg">
          <LocationIcon width={20} height={20} />
          <p>{convertToFarsiDigits(adress)}</p>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <PriceIcon width={20} height={20} />
          {discountPercent > 0 ? <span className="text-green-500 font-semibold">{convertToFarsiDigits(`${discountedPrice}`)} تومان</span> : null}
          {discountPercent > 0 ? (
            <del className="text-slate-500">{convertToFarsiDigits(`${price}`)} تومان</del>
          ) : (
            <span className="text-slate-500">{convertToFarsiDigits(`${price}`)} تومان</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default HallDetailCard;
