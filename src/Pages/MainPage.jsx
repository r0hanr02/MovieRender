import { useEffect, useState } from "react";
import {
  AIPrompt,
  genre,
  language,
  mood,
  releaseYear,
} from "../constants/constant";
import Navbar from "../components/custom/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/custom/Footer";
import { toast, ToastContainer } from "react-toastify";
import { chat } from "../service/AIModel";
import SelectInput from "../components/custom/SelectInput";
import Spinner from "../components/custom/Spinner"; // 🔹 Import spinner
import { number } from "motion";

const App = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [number, setNumber] = useState(5);
  const [finalPrompt, setFinalPrompt] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMood || !selectedGenre || !selectedLanguage || !selectedYear) {
      toast.error("⚠️ Fill in all the inputs");
      return;
    }

    const FinalAIPrompt = AIPrompt.replace("{mood}", selectedMood)
      .replace("{genre}", selectedGenre)
      .replace("{language}", selectedLanguage)
      .replace("{release_year}", selectedYear)
      .replace("{number}", number);

    setFinalPrompt(FinalAIPrompt);
  };

  useEffect(() => {
    if (!finalPrompt) return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await chat.sendMessage({ message: finalPrompt });

        // Ensure we always extract the text correctly
        const text =
          typeof response.text === "function"
            ? await response.text()
            : response.text;

        let parsedData = [];

        try {
          // Step 1: Parse once
          const firstParse = JSON.parse(text);

          // Step 2: If it's an array with a string inside → parse again
          if (Array.isArray(firstParse) && typeof firstParse[0] === "string") {
            parsedData = JSON.parse(firstParse[0]);
          } else {
            parsedData = firstParse;
          }
        } catch (err) {
          console.error("❌ Failed to parse AI response:", err);
          toast.error("AI returned invalid data. Try again.");
          return;
        }

        // ✅ Save clean JSON
        setData(parsedData);
        localStorage.setItem("data", JSON.stringify(parsedData));

        navigate("/movies");
      } catch (error) {
        console.error("AI API error:", error);

        if (error.message?.includes("503")) {
          toast.error("⚡ The AI is overloaded. Please try again later.");
        } else {
          toast.error("❌ Something went wrong. Try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [finalPrompt]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <Navbar />
      <ToastContainer />

      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col items-center justify-center px-4 md:px-0 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center animate-fadeIn">
            <span className="text-blue-500">M</span>ovie{" "}
            <span className="text-red-500">R</span>ender
          </h1>
          <p className="text-md md:text-xl mb-10 text-center opacity-80 animate-fadeIn delay-200">
            Find movies based on your mood, genre, language, and release year
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <SelectInput
              label="Mood"
              value={selectedMood}
              onChange={setSelectedMood}
              options={mood}
              placeholder="Select Mood"
            />
            <SelectInput
              label="Genre"
              value={selectedGenre}
              onChange={setSelectedGenre}
              options={genre}
              placeholder="Select Genre"
            />
            <SelectInput
              label="Language"
              value={selectedLanguage}
              onChange={setSelectedLanguage}
              options={language}
              placeholder="Select Language"
            />
            <SelectInput
              label="Release Year"
              value={selectedYear}
              onChange={setSelectedYear}
              options={releaseYear}
              placeholder="Select Year"
            />
          </div>
          <label className="bg-white/10 backdrop-blur-md p-4 m-4 rounded-2xl border border-white/20 hover:border-amber-400 transition-all duration-300 font-bold w-full md:w-[63%] ">
            How much movie you want us to recommend?
            <input
              className="w-full border-none rounded p-3  focus:ring-2 focus:ring-amber-400 outline-none font-normal"
              type="number"
              min={5}
              max={50}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              label="number"
            />
          </label>

          <button className="my-10 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            Search Recommended Movies
          </button>
        </form>
      )}

      <Footer />
    </div>
  );
};

export default App;
