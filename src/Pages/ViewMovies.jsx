import React, { useEffect, useState } from "react";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";
import MovieCard from "../components/custom/MovieCards";
import Pagination from "../components/custom/Pagination";

const ViewMovies = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("data"));
    setMovieData(getData || []);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
          🎬 AI Recommended Movies
        </h1>

        {movieData.length === 0 ? (
          <p className="text-gray-400 text-center">
            No movies found. Try searching again.
          </p>
        ) : (
          <Pagination movieData={movieData} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ViewMovies;
