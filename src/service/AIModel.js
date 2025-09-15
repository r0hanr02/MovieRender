import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chat = genAI.chats.create({
  generationConfig,
  model: "gemini-2.5-flash",
  history: [
    {
      role: "user",
      parts: [
        {
          text: "You are an AI movie recommendation assistant. The user’s mood is 'Relaxed'. They prefer the genre 'Comedy', language 'English', and movies released after 2000 give 7 movies. Recommend movies that match these preferences.Return only valid JSON. Do not include code fences, explanations, or extra text. Each object must have: title, year, genre, imdb_rating, why_recommended.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `[
  {
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "genre": "Adventure, Comedy, Drama",
    "imdb_rating": 8.1,
    "why_recommended": "A charming and whimsical English comedy with a unique visual style and witty dialogue, following the adventures of a concierge and his lobby boy. Perfect for a relaxed mood."
  },
  {
    "title": "Forgetting Sarah Marshall",
    "year": 2008,
    "genre": "Comedy, Romance",
    "imdb_rating": 7.1,
    "why_recommended": "A hilarious and heartwarming English romantic comedy set in Hawaii, offering plenty of laughs and a sweet story about moving on. Great for unwinding."
  },
  {
    "title": "Paddington 2",
    "year": 2017,
    "genre": "Animation, Adventure, Comedy",
    "imdb_rating": 7.8,
    "why_recommended": "A delightful and genuinely charming English family comedy that's universally loved for its warmth, wit, and visual creativity. A perfect feel-good movie."
  },
  {
    "title": "School of Rock",
    "year": 2003,
    "genre": "Comedy, Music",
    "imdb_rating": 7.1,
    "why_recommended": "A high-energy, feel-good English comedy starring Jack Black as a substitute teacher who turns his class into a rock band. Pure fun and very entertaining for a relaxed mood."
  },
  {
    "title": "Sing Street",
    "year": 2016,
    "genre": "Comedy, Drama, Music",
    "imdb_rating": 7.9,
    "why_recommended": "A sweet and charming English-language musical comedy-drama about a boy who starts a band to impress a girl. It's full of great music and a genuinely uplifting story."
  },
  {
    "title": "Knives Out",
    "year": 2019,
    "genre": "Comedy, Crime, Drama",
    "imdb_rating": 7.9,
    "why_recommended": "A witty and stylish ensemble mystery with a strong comedic undertone. It's an engaging whodunit that's clever and highly entertaining, perfect for a relaxed yet engaging watch."
  },
  {
    "title": "Spirited Away",
    "year": 2001,
    "genre": "Animation, Adventure, Family",
    "imdb_rating": 8.6,
    "why_recommended": "While not strictly a comedy, this animated masterpiece has moments of gentle humor and incredible whimsy. It's profoundly beautiful and calming, offering a magical escape for a relaxed viewing."
  }
]`,
        },
      ],
    },
  ],
});
