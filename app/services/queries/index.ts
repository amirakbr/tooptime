import { useQuery } from '@tanstack/react-query';
import proxy from '../proxy/proxy';
import { IPopularHallResult } from './interface';

export const getPopularHall = () => {
  return proxy.get<IPopularHallResult[]>('Hall/GetFilteredHalls?categoryType=1&pageSize=4&pageNumber=1');
};

export const getDisCountersHall = () => {
  return proxy.get<IPopularHallResult[]>('Hall/GetFilteredHalls?categoryType=0&pageSize=4&pageNumber=1');
};