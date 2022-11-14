import { atom } from 'recoil';
import { IMovies } from '../interfaces/interface';

export const searchedMoviesState = atom<IMovies[]>({
  key: 'searchState/searchedMovies',
  default: [],
});
