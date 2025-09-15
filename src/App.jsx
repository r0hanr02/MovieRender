import Hero from "./Pages/Hero";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ViewMovies from "./Pages/ViewMovies";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/render" element={<MainPage />} />
        <Route path="/movies" element={<ViewMovies />} />
      </Routes>
    </>
  );
}

export default App;
