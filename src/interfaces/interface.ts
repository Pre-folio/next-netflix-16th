export interface IThumbnailProps {
  imageSrc: string;
  id: number;
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: number;
  vote_average: number;
  vote_count: number;
}

export interface IWrapperProps {
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  marginBottom?: string;
  marginTop?: string;
}
