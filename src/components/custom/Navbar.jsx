import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onMovies = location.pathname === "/render";
  return (
    <nav className="w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <h2 className="text-xl text-center md:text-3xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform duration-300">
            <span className="text-blue-500">M</span>ovie🍿
            <span className="text-red-500">R</span>ender 
          </h2>
        </Link>

        <div>
          {onMovies ? (
            <Button
              onClick={() => navigate("/movies")}
              className="px-5 py-2 text-base bg-amber-500 text-gray-900 font-semibold rounded-lg shadow hover:bg-amber-400 hover:scale-105 transition-all duration-300"
            >
              Recommended Movies 🍿
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/render");
              }}
              className="px-5 py-2 text-base bg-amber-500 text-gray-900 font-semibold rounded-lg shadow hover:bg-amber-400 hover:scale-105 transition-all duration-300"
            >
              Generate Movie 🎦
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
