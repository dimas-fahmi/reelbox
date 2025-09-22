export const TMDB_IMAGE_HOST = "https://image.tmdb.org/t/p";
export const VIDKING_HOST = "https://www.vidking.net/embed";
export const VIDORA_HOST = "https://vidora.su";
export const YOUTUBE_EMBED_HOST = "https://www.youtube.com/embed";
export const YOUTUBE_IMAGE_HOST = "https://img.youtube.com/vi";

export const TMDB_FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.SECRET_TMDB_API_READ_ACCESS_TOKEN}`,
  },
  next: {
    revalidate: 86400 * 2, // Revalidate once every two days
  },
};
