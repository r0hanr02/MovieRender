import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import MovieCard from "./MovieCards";

const Pagination = ({ movieData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const indexOfLast = currentPage * 10;
  const indexOfFirst = indexOfLast - itemPerPage;
  const currentMovies = movieData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(movieData.length / itemPerPage);

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {currentMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            genre={movie.genre}
            imdb_rating={movie.imdb_rating}
            where_to_watch={movie.where_to_watch}
            year={movie.year}
            why_recommended={movie.why_recommended}
            poster={movie.poster}
          />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className=" flex items-center justify-center m-6">
        <Button
          variant="outline"
          className="text-black font-black"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </Button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          className="text-black font-black"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
