🍿 MovieRender

MovieRender is an AI-powered movie recommendation app that suggests films based on your mood, favorite genre, language, and release year range. It combines the power of Google Gemini AI with TMDB API to give you smart, personalized picks — with posters, ratings, and streaming platforms included.

✨ Features

🎭 Mood-based recommendations – because sometimes you want laughs, sometimes you want thrills.

🌍 Language & genre filters – get suggestions that match your vibe.

🕰️ Year ranges – from golden classics to the latest releases.

🤖 Powered by Gemini AI – ensures the results aren’t just random, but meaningful.

🎬 Movie posters & details – fetched live from TMDB.

⚡ Responsive design – works smoothly on desktop and mobile.

☁️ Deployed on Vercel – fast and reliable.

🛠️ Tech Stack

Frontend: React + Vite + Tailwind CSS

AI: Google Gemini API

Data: TMDB API (for movie posters & metadata)

Hosting: Vercel

Auth / Infra: Firebase (optional, for secure API key handling)

🚀 Getting Started
1. Clone the repo
git clone https://github.com/your-username/movierender.git
cd movierender

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the root:

VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_TMDB_API_KEY=your_tmdb_api_key


⚠️ Never expose these keys publicly. If deploying on Vercel, add them in Project Settings → Environment Variables.

4. Run locally
npm run dev


Open http://localhost:5173
 to see it live.