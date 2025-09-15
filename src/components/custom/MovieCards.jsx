import React, { useEffect, useState } from "react";
import { fetchMoviePoster } from "../../service/tmdb";

const MovieCard = ({
  title,
  year,
  genre,
  imdb_rating,
  where_to_watch,
  why_recommended,
  poster,
}) => {
  const [posterUrl, setPosterUrl] = useState(null);

  useEffect(() => {
    const fetchPoster = async () => {
      const url = await fetchMoviePoster(title, year);
      setPosterUrl(url);
    };
    fetchPoster();
  }, [title, year]);

  return (
    <div className="md:flex bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
      {/* Poster */}
      <div className="md:w-80 h-60 flex-shrink-0 ">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover 
            object-center md:object-top hover:scale-110 transition-all"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 font-bold">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMjE1NTYyNjQxOV5BMl5BanBnXkFtZTcwNDk5NjUzOQ@@._V1_.jpg"
              alt={title}
              className="w-full h-full object-cover 
            object-top"
            />
          </div>
        )}
      </div>

      {/* Movie details */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-400 text-sm">{year}</p>
          <p className="text-gray-300 text-sm mt-1">{genre}</p>
          <p className="text-amber-400 font-semibold mt-1">
            ⭐ {imdb_rating}/10
          </p>
        </div>

        <p className="text-gray-400 text-sm mt-3 line-clamp-3">
          {why_recommended}
        </p>

        <div className="mt-3">
          <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-medium">
            📺 {where_to_watch}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
