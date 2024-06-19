'use client';
import { IPopularHallResult } from '@/app/services/queries/interface';
import Image from 'next/image';
import HallImage from './hallImage';
import { convertToFarsiDigits } from '@/app/utils/formatNumber';
import StartIcon from '../icons/starIcon';
import LocationIcon from '../icons/locationIcon';
import PriceIcon from '../icons/priceIcon';
import { ErrorBoundaryHandler } from 'next/dist/client/components/error-boundary';
import { NotFoundBoundary } from 'next/dist/client/components/not-found-boundary';

const HallDetailCard = ({
  address,
  cityName,
  commentsCount,
  complexName,
  discountPercent,
  discountedPrice,
  hallName,
  id,
  mainImage,
  point,
  price,
}: Omit<IPopularHallResult, 'width' | 'sportsFieldNames' | 'sex' | 'options' | 'imageUrls' | 'height' | 'detailsOfFirstReservableTime'>) => {
  return (
    <div className="flex flex-col gap-4 p-2 rounded-lg border-4 border-darkPeach bg-white">
      <div className="overflow-hidden rounded relative">
        {discountPercent > 0 ? (
          <div className="absolute top-4 right-4 flex items-center justify-center gap-2 bg-green-800/50 backdrop-blur-sm rounded-lg text-lg text-white px-1 h-6 w-12">
            <span className="mt-1">٪</span>
            <span className="mt-1">{convertToFarsiDigits(`${discountPercent}`)}</span>
          </div>
        ) : null}
        <HallImage cityName={cityName} complexName={complexName} imageUrl={mainImage} />
        <div className="absolute top-4 left-4 flex items-center justify-center gap-2 bg-slate-500/50 backdrop-blur-sm rounded-lg text-lg text-white px-1 h-6 w-12">
          <StartIcon width={10} height={10} />
          <span className="mt-1">{convertToFarsiDigits(`${point}`)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{convertToFarsiDigits(hallName)}</h3>
        <div className="flex items-center gap-2 text-lg">
          <LocationIcon width={20} height={20} />
          <p>{convertToFarsiDigits(address)}</p>
        </div>
        <div className="flex items-end gap-2 text-lg">
          <div className="flex items-center gap-2">
            <PriceIcon width={20} height={20} />
            {discountPercent > 0 ? (
              <span className="text-green-500 font-semibold text-lg">{convertToFarsiDigits(`${discountedPrice}`)} تومان</span>
            ) : null}
          </div>
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
