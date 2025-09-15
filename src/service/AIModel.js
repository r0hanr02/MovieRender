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
          text: "You are an AI movie recommendation assistant. The user’s mood is 'Relaxed'. They prefer the genre 'Comedy', language 'English', and movies released after 2000. Recommend movies that match these preferences.Return only valid JSON. Do not include code fences, explanations, or extra text. Each object must have: title, year, genre, imdb_rating, why_recommended.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `[{"title":"Zindagi Na Milegi Dobara","year":2011,"genre":"Comedy, Drama, Romance","imdb_rating":8.2,"why_recommended":"A heartwarming and often hilarious Hindi film about three friends on a bachelor trip in Spain, learning about life, love, and friendship. Perfect for a relaxed mood.","where_to_watch":"Netflix"},{"title":"The Grand Budapest Hotel","year":2014,"genre":"Adventure, Comedy, Drama","imdb_rating":8.1,"why_recommended":"A charming and whimsical English comedy with a unique visual style and witty dialogue, following the adventures of a concierge and his lobby boy.","where_to_watch":"Disney+"},{"title":"Piku","year":2015,"genre":"Comedy, Drama","imdb_rating":7.6,"why_recommended":"A delightful Hindi film that offers gentle humor and a realistic portrayal of a father-daughter relationship during a road trip. Great for a calm and relaxed viewing.","where_to_watch":"SonyLIV"},{"title":"Forgetting Sarah Marshall","year":2008,"genre":"Comedy, Romance, Drama","imdb_rating":7.1,"why_recommended":"A hilarious English romantic comedy with a great cast and a surprisingly sweet story about moving on after a breakup, set in beautiful Hawaii. Ideal for lighthearted entertainment.","where_to_watch":"Rent/Buy on Prime Video, Google Play"},{"title":"Gulabo Sitabo","year":2020,"genre":"Comedy, Drama","imdb_rating":6.3,"why_recommended":"A quirky and witty Hindi film about an old landlord and his tenant constantly bickering over an old mansion, offering gentle humor and charming performances.","where_to_watch":"Prime Video"}]`,
        },
      ],
    },
  ],
});
