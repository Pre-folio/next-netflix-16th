import { atom } from 'recoil';

export const nowPlyingMoviesState = atom({
  key: 'homeState/nowPlyingMovies',
  default: [],
});

export const topRatedMoviesState = atom({
  key: 'homeState/topRatedMovies',
  default: [],
});

export const popularMoviesState = atom({
  key: 'homeState/popularMovies',
  default: [],
});

export const upComingMoviesState = atom({
  key: 'homeState/upComingMovies',
  default: [],
});
