export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie";
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVShowResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string; // "name" instead of "title"
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: "tv"; // fixed type
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string; // "first_air_date" instead of "release_date"
  vote_average: number;
  vote_count: number;
  origin_country: string[]; // Added for TV shows
}

export interface PersonResult {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: "person"; // fixed type for person
  popularity: number;
  gender: number; // 1 for female, 2 for male, etc.
  known_for_department: string; // e.g., "Acting", "Directing"
  profile_path: string; // Path to the person's profile image
}

export type MediaResult = PersonResult | MovieResult | TVShowResult;

export interface TrendingListResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CrewMember {
  department: string;
  job: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface GuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: CrewMember[];
  guest_stars: GuestStar[];
}

export interface Season {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface Creator {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

export interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

export interface Network {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface TVShow {
  adult: boolean;
  backdrop_path: string | null;
  created_by: Creator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: null | object;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface VideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string; // ISO date string
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}

export interface Videos {
  results: VideoResult[];
}

export interface ContentRating {
  descriptors: string[];
  iso_3166_1: string;
  rating: string;
}

export interface ContentRatings {
  results: ContentRating[];
}

export interface ReleaseDate {
  certification: string;
  descriptors: string[];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}

export interface CountryReleaseDates {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDates {
  results: CountryReleaseDates[];
}

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Recommendations<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

export interface Image {
  aspect_ratio: number;
  heigth: number;
  iso_639_1: string;
  file_path: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  backdrops: Image[];
  logos: Image[];
  posters: Image[];
}
