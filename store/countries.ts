import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';

export const countries = atom<Array<ICountry>>([]);

// TODO: add query to get countries
