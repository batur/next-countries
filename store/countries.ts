import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';
import { axiosInstance } from 'utils';

export const countries = atom<Array<ICountry>>([]);

export const getAllCountries = atomWithQuery((get) => ({
  queryKey: ['countries', get(countries)],
  queryFn: async () => {
    return await axiosInstance
      .get('/all')
      .then((res) => res.data)
      .catch((err) => err);
  },
  cacheTime: 60 * 60 * 24,
  refetchOnWindowFocus: false,
}));
