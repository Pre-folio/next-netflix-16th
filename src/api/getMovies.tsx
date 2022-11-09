import client from './client';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const getNowPlaying = () => {
  return client.get(`movie/now_playing?api_key=${API_KEY}`).then((res) => res.data);
};
