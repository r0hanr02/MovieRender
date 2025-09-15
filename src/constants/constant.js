export const mood = [
  {
    name: "Relaxed 😌",
    description: "Lighthearted, calm, or feel-good movies.",
  },
  {
    name: "Excited 🤩",
    description: "Thrilling, energetic, or action-packed movies.",
  },
  { name: "Sad 😢", description: "Emotional, heartfelt, or cathartic movies." },
  {
    name: "Curious 🧐",
    description: "Intellectually stimulating or mind-bending movies.",
  },
  {
    name: "Romantic ❤️",
    description: "Love stories or feel-good romantic experiences.",
  },
  {
    name: "Adventurous 🏞️",
    description: "Exciting, journey-based, or epic films.",
  },
  {
    name: "Scared 😱",
    description: "Horror or suspenseful movies to get your adrenaline going.",
  },
  { name: "Inspirational 🌟", description: "Motivating and uplifting films." },
  {
    name: "Thoughtful 🤔",
    description: "Movies that provoke reflection or deeper thinking.",
  },
  {
    name: "Funny 😂",
    description: "Comedy films that make you laugh and lighten the mood.",
  },
];

export const genre = [
  { name: "Comedy", description: "Lighthearted, humorous, and fun movies." },
  {
    name: "Action",
    description: "High-energy films with fights, chases, and adventure.",
  },
  {
    name: "Drama",
    description: "Story-driven films with emotional and relational depth.",
  },
  { name: "Romance", description: "Love stories and emotional connections." },
  {
    name: "Thriller",
    description: "Suspenseful movies with tension and mystery.",
  },
  {
    name: "Sci-Fi",
    description: "Futuristic, technological, or space-based films.",
  },
  { name: "Adventure", description: "Epic journeys and exploration." },
  {
    name: "Fantasy",
    description: "Imaginative worlds, magic, and mythical adventures.",
  },
  {
    name: "Mystery",
    description: "Films focused on solving puzzles, secrets, or crimes.",
  },
  {
    name: "Documentary",
    description: "Non-fiction films exploring real-world topics.",
  },
  {
    name: "Horror",
    description: "Scary or suspenseful films to thrill or frighten viewers.",
  },
  {
    name: "Animation",
    description:
      "Animated films for children or adults, often creative and imaginative.",
  },
];

export const language = [
  { name: "English" },
  { name: "Hindi" },
  { name: "Marathi" },
  { name: "Tamil" },
  { name: "Japanese" },
  { name: "Malayalam" },
];

export const releaseYear = [
  { name: "2000 - 2009", value: "2000-2009" },
  { name: "2010 - 2014", value: "2010-2014" },
  { name: "2015 - 2019", value: "2015-2019" },
  { name: "2020 - Present", value: `2020-${new Date().getFullYear()}` },
  { name: "Before 2000", value: "0-1999" },
];

export const AIPrompt =
  "You are an AI movie recommendation assistant. The user’s mood is '{mood}'. They prefer the genre '{genre}', language '{language}', and movies released after {release_year}. Recommend movies that match these preferences. Always return the results in valid JSON format with the following fields: title, year, genre, imdb_rating, why_recommended, where_to_watch. Do not include any explanations, markdown, or extra text.";
