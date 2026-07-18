🎬 Movie App

A modern movie discovery application built with React, Vite, TMDB API, and Appwrite. Users can browse movies, search by title, and view the most searched movies based on real-time search statistics stored in Appwrite.

🚀 Live Demo

Live Site: https://your-vercel-url.vercel.app

✨ Features
🔍 Search movies using the TMDB API
🎬 Browse popular movies
📈 View the Top 5 Trending Movies based on user searches
⚡ Fast React + Vite frontend
☁️ Appwrite backend for storing search analytics
📱 Responsive design for desktop and mobile
🛠 Tech Stack
React
Vite
Appwrite
TMDB API
JavaScript (ES6+)
CSS
📂 Project Structure
src/
 ├── components/
 ├── assets/
 ├── appwrite.js
 ├── App.jsx
 └── main.jsx
📊 How Trending Movies Work

Whenever a user searches for a movie:

The app checks whether that search term already exists in Appwrite.
If it exists, the count field is increased by 1.
Otherwise, a new document is created.
The homepage retrieves the five most searched movies using:
Query.orderDesc("count")
Query.limit(5)

This keeps the Trending Movies section updated automatically.

⚙️ Installation

Clone the repository:

git clone https://github.com/Moti-Abe/movie-app.git

Move into the project:

cd movie-app

Install dependencies:

npm install

Create a .env.local file:

VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

Run the project:

npm run dev
🚀 Deployment

This project is deployed on Vercel.

To deploy your own version:

Push the project to GitHub.
Import the repository into Vercel.
Add all VITE_* environment variables.
Deploy.
📄 vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

This ensures React Router works correctly after refreshing the page.

📸 Screenshots

Add screenshots here once your project is finished.

👨‍💻 Author

Moti Abe

GitHub: https://github.com/Moti-Abe
