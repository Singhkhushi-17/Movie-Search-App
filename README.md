# 🎬 React Movie Search App

A modern Movie Search Application built with **React.js**, **Vite**, **Tailwind CSS**, and the **OMDb API**.

This project allows users to search for movies and view details such as the poster, release year, and IMDb rating.

---

# Get your API key from: https://www.omdbapi.com/apikey.aspx


## Setup Environment Variables

1. Create a `.env.local` file in the project root.
2. Copy the content from `.env.example`.
3. VITE_OMDB_API_KEY = YOUR_API_KEY   (in your file.env.local)
4. Replace `YOUR_OMDB_API_KEY` with your own OMDb API key.
5. Run the project.

```bash
npm install
npm run dev
VITE_OMDB_API_KEY=YOUR_OMDB_API_KEY

## 🚀 Live Features

- 🔍 Search movies by title
- 🎬 Display movie posters
- ⭐ IMDb ratings
- 📅 Release year
- ⚡ Debounced search for better performance
- ⏳ Loading indicator
- ❌ Error handling
- 📱 Responsive design

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- OMDb API

---

## 📚 Concepts Used

### React
- Functional Components
- Component Reusability
- Props
- useState
- useEffect
- Conditional Rendering

### JavaScript
- Fetch API
- Async/Await
- Object Destructuring
- Array map()
- Template Literals
- Environment Variables
- Debouncing

---

## ⚠️ Why OMDb Instead of TMDB?

This project was inspired by the **JavaScript Mastery React tutorial**, which uses the **TMDB API**.

While following the tutorial, I encountered API access issues with TMDB. Instead of stopping the project, I adapted it to work with the **OMDb API**.

Since OMDb and TMDB provide different endpoints and data structures, some features from the original tutorial (such as **Trending Movies**) are **not available** in this version.

This repository is especially helpful for learners who face similar TMDB API issues and want to continue building the project using OMDb.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/react-movie-search-app.git
```

Move into the project folder:

```bash
cd react-movie-search-app
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Configure the API Key

Create a file named:

```text
.env.local
```

Add your OMDb API key:

```env
VITE_OMDB_API_KEY=YOUR_API_KEY
```

You can get a free API key from:

https://www.omdbapi.com/apikey.aspx

After creating the file, restart the development server.

---

## ▶️ Run the Project

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
 ├── Components/
 │     ├── MovieCard.jsx
 │     └── Search.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

public/
```

---

## 📸 Preview

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6866a07b-057f-46b1-8247-08ca68c73238" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/31eb97c9-cb01-4f7d-8aa6-3ad47bb2ab9a" />



---

## 🤝 Contributions

Feel free to fork this repository, suggest improvements, or submit a pull request.

---

## ⭐ Support

If this project helped you, consider giving it a ⭐ on GitHub.

Khushi Singh 
