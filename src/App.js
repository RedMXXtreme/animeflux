import React, { useState, useEffect } from 'react';
import { FaRandom, FaSearch } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);

  const Posters = {
    trending: [
      {
        image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/65f92e6e315a931ef872da4b312442b8.jpg",
        link: "https://animeflux-solo-leveling-arise-from-the-shadow-s02.pages.dev/",
      },
      // ... More posters (keep as-is)
    ],
    // ... Other categories (Thriller, actionMovies, etc.)
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
          <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
          <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeDashoffset="-220" strokeLinecap="round"></circle>
          <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeDashoffset="-220" strokeLinecap="round"></circle>
        </svg>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Banner />

      <div className='row'>
        <Row title="Trending Now" posters={Posters.trending} />
        {/* Add other categories here */}
      </div>

      <footer style={{ textAlign: 'center', padding: '5rem', backgroundColor: '#000' }}>
        <p>&copy; Copyright Aniwatch. All Rights Reserved. This site does not store any files on its server. All contents are provided by non-affiliated third parties. Socials:</p>
        <div className="social-icons">
          <a href="https://twitter.com/Aniwacth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/Aniwacth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/Aniwacth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

function Row({ title, posters = [] }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4" aria-label={title}>{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-2">
        <div className="scrollmenu1">
          {posters.slice(0, 15).map((poster, index) => (
            <a href={poster.link} target="_blank" rel="noopener noreferrer" key={index}>
              <img
                src={poster.image}
                alt={`Movie poster ${index + 1}`}
                className="w-48 h-72 object-cover rounded"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black fixed w-full z-10">
      <div className="flex items-center space-x-4">
        <a href='/'>
          <img
            src="https://i.postimg.cc/hGXVFjTn/DALL-E-2025-03-25-19-51-32-A-sleek-dark-themed-logo-for-Anime-Flux-featuring-bold-anime-inspir.webp"
            alt="Anime Flux"
            style={{ width: "2rem" }}
          />
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">TV Shows</a>
          <a href="#" className="hover:text-gray-400">Movies</a>
          <a href="#" className="hover:text-gray-400">New & Popular</a>
          <a href="#" className="hover:text-gray-400">My List</a>
        </nav>
      </div>
    </header>
  );
}

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://rare-gallery.com/mocahbig/1376871-jujutsu-kaisen-anime-characters-4k-pc-wallpaper.jpg",
    "https://wallpapercave.com/wp/wp11268662.jpg",
    "https://static.animecorner.me/2023/11/1698837096-72473.jpg",
    "https://horizons.pokemon.com/images/share-fb.jpg",
  ];

  const texts = [
    "Jujutsu Kaisen - Experience the thrill!",
    "Epic Adventures Await - Watch Now!",
    "Dive into the Anime World!",
    "Catch 'em all in Pokemon!",
  ];

  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('${images[currentIndex]}')` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-10 left-10">
        <h1 className="text-white text-3xl font-bold">{texts[currentIndex]}</h1>
        <div className="mt-4 flex space-x-2">
          <button onClick={prevImage} className="text-white bg-gray-800 p-2 rounded">Prev</button>
          <button onClick={nextImage} className="text-white bg-gray-800 p-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
