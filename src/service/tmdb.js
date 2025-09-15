export const fetchMoviePoster = async (title) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      title
    )}`
  );
  const data = await res.json();
  if (data.results && data.results.length > 0) {
    // TMDB returns poster path like "/abc123.jpg"
    return "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
  }
  return null; // fallback if no poster found
};
