# 🎬 Movie App

A modern movie discovery web application built with **React**, **Vite**, **Tailwind CSS**, **TMDB API**, and **Appwrite**. Users can browse popular movies, search for their favorite titles, and discover the top trending movies based on real-time search statistics stored in Appwrite.

## 🚀 Live Demo

🔗 **Live Website:**[ https://your-vercel-url.vercel.app](https://moti-movie-app.vercel.app/)

---

## ✨ Features

- 🔍 Search movies instantly using the TMDB API
- 🎬 Browse popular and trending movies
- 📈 View the **Top 5 Trending Movies** based on real-time user search activity
- ⚡ Fast and responsive UI powered by React + Vite
- ☁️ Serverless backend using Appwrite Cloud
- 🎨 Modern, responsive interface built with Tailwind CSS
- 📱 Fully responsive across desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

### Backend

- Appwrite Cloud
- Appwrite Database

### APIs

- TMDB API

### Deployment

- Vercel

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
├── appwrite.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📊 How Trending Movies Work

This application tracks movie popularity using Appwrite.

When a user searches for a movie:

1. The application checks whether the search term already exists in the Appwrite database.
2. If it exists, the `count` field is incremented.
3. Otherwise, a new document is created.
4. The homepage retrieves the five most searched movies by executing:

```javascript
Query.orderDesc("count");
Query.limit(5);
```

This allows the Trending Movies section to update automatically based on user activity.

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- Appwrite Cloud account
- TMDB API Read Access Token

---

### Clone the Repository

```bash
git clone https://github.com/Moti-Abe/movie-app.git
```

```bash
cd movie-app
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment Variables

Create a `.env.local` file in the project root.

```env
VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

---

### Run the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.


## 📸 Screenshots

### Home Page

> Add a screenshot here.

### Search Results

> Add a screenshot here.
> <img width="1885" height="1011" alt="image" src="https://github.com/user-attachments/assets/d6e3b521-363f-41e6-9721-364911c8e067" />


### Trending Movies

> Add a screenshot here.
> <img width="1868" height="1007" alt="Screenshot 2026-07-18 161421" src="https://github.com/user-attachments/assets/2e2b9b8c-cd3a-48d1-b742-b89af1ee61f4" />




---

## 👨‍💻 Author

**Moti Abe**

GitHub: https://github.com/Moti-Abe

---

