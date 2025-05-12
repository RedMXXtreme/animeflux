import './App.css';
import React, { useState, useEffect } from 'react';
import { FaRandom, FaSearch } from "react-icons/fa";

function App() {
    const [loading, setLoading] = useState(true); // Step 1: Create loading state
    const Posters = {
        trending: [
            {
                title: "The Catcher in the Ballpark!",
                image: "https://cdn.myanimelist.net/images/anime/1792/148616l.jpg",
                link: "https://anime-flux-the-catcher-in-the-ballpark.pages.dev/",
                cc: "EN",
                eps: 12,
            },
            {
                title: "Uma Musume: Cinderella Grey",
                image: "https://cdn.myanimelist.net/images/manga/3/240780.jpg",
                link: "https://2anime.xyz/embed/uma-musume-cinderella-grey-episode-5",
                cc: "JP",
                eps: 5,
            },
            {
                title: "Compass2.0: Combat Providence Analysis System",
                image: "https://cdn.myanimelist.net/images/anime/1538/142767.jpg",
                link: "https://2anime.xyz/embed/compass20-combat-providence-analysis-system-episode-5",
                cc: "EN",
                eps: 5,
            },
            {
                title: "Detective Conan",
                image: "https://icdn.store/cover/detective-conan.png",
                link: "https://2anime.xyz/embed/detective-conan-episode-1161",
                cc: "JP",
                eps: 1161,
                },
                {
                title: "The Brilliant Healer's New Life in the Shadows",
                image: "https://cdn.myanimelist.net/images/anime/1211/147335.jpg",
                link: "https://2anime.xyz/embed/the-brilliant-healers-new-life-in-the-shadows-episode-6",
                cc: "JP",
                eps: 6,
                },
                {
                title: "To Be Hero X",
                image: "https://cdn.myanimelist.net/images/anime/1232/148474.jpg",
                link: "https://2anime.xyz/embed/to-be-hero-x-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "The Mononoke Lecture Logs of Chuzenji-sensei",
                image: "https://cdn.myanimelist.net/images/anime/1827/145858.jpg",
                link: "https://2anime.xyz/embed/the-mononoke-lecture-logs-of-chuzenji-sensei-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "I've Been Killing Slimes for 300 Years and Maxed Out My Level 2nd Season",
                image: "https://cdn.myanimelist.net/images/anime/1803/111792.jpg",
                link: "https://2anime.xyz/embed/ive-been-killing-slimes-for-300-years-and-maxed-out-my-level-2nd-season-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "Rock wa Lady no Tashinami deshite",
                image: "https://cdn.myanimelist.net/images/anime/1169/148459.jpg",
                link: "https://2anime.xyz/embed/rock-wa-lady-no-tashinami-deshite-episode-6",
                cc: "JP",
                eps: 6,
                },
                {
                title: "SHIROHIYO - Reincarnated as a Neglected Noble",
                image: "https://cdn.myanimelist.net/images/anime/1059/147448.jpg",
                link: "https://2anime.xyz/embed/shirohiyo-reincarnated-as-a-neglected-noble-raising-my-baby-brother-with-memories-from-my-past-life-episode-4",
                cc: "JP",
                eps: 4,
                },
                {
                title: "The Shiunji Family Children",
                image: "https://cdn.myanimelist.net/images/manga/2/264857.jpg",
                link: "https://2anime.xyz/embed/the-shiunji-family-children-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "Anne Shirley",
                image: "https://cdn.myanimelist.net/images/anime/1674/147871.jpg",
                link: "https://2anime.xyz/embed/anne-shirley-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "Wind Breaker Season 2",
                image: "https://cdn.myanimelist.net/images/anime/1526/148873.jpg",
                link: "https://2anime.xyz/embed/wind-breaker-season-2-episode-6",
                cc: "JP",
                eps: 6,
                },
                {
                title: "The Unaware Atelier Master",
                image: "https://cdn.myanimelist.net/images/anime/1743/148272.jpg",
                link: "https://2anime.xyz/embed/the-unaware-atelier-master-episode-6",
                cc: "JP",
                eps: 6,
                },
                {
                title: "Once Upon a Witch's Death",
                image: "https://cdn.myanimelist.net/images/anime/1620/148221.jpg",
                link: "https://2anime.xyz/embed/once-upon-a-witchs-death-episode-6",
                cc: "JP",
                eps: 6,
                },
                {
                title: "Guilty Gear Strive: Dual Rulers",
                image: "https://cdn.myanimelist.net/images/anime/1199/147623.jpg",
                link: "https://2anime.xyz/embed/guilty-gear-strive-dual-rulers-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "The Gorilla God's Go-To Girl",
                image: "https://cdn.myanimelist.net/images/anime/1714/148317.jpg",
                link: "https://2anime.xyz/embed/the-gorilla-gods-go-to-girl-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "Mobile Suit Gundam GQuuuuuuX",
                image: "https://cdn.myanimelist.net/images/anime/1052/148743.jpg",
                link: "https://2anime.xyz/embed/mobile-suit-gundam-gquuuuuux-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "From Old Country Bumpkin to Master Swordsman",
                image: "https://cdn.myanimelist.net/images/manga/1/296669.jpg",
                link: "https://2anime.xyz/embed/from-old-country-bumpkin-to-master-swordsman-my-hotshot-disciples-are-all-grown-up-now-and-they-wont-leave-me-alone-episode-5",
                cc: "JP",
                eps: 5,
                },
                {
                title: "Go Go Loser Ranger 2nd Season",
                image: "https://cdn.myanimelist.net/images/anime/1405/147694.jpg",
                link: "https://2anime.xyz/embed/go-go-loser-ranger-2nd-season-episode-4",
                cc: "JP",
                eps: 4,
                },


            // Add similar structure for other entries
        ],
        Thriller: [
            {
            title: "Code Geass: Rozeof There Capture",
            image: "https://static.animekai.to/b8/i/f/ae/67664a35ada83@300.jpg",
            link: "https://animeflux-code-geass-rozeof-there-capture.pages.dev/",
            cc: "EN",
            eps: 24,
            },
            {
            title: "Link Click 2",
            image: "https://static.animekai.to/69/i/c/a7/676649399560d@300.jpg",
            link: "https://animeflux-link-click-2.pages.dev/",
            cc: "JP",
            eps: 12,
            },
           
        ],
        actionMovies: [
            {
            title: "Action Movie 1",
            image: "https://static.animekai.to/9b/i/a/bd/67664ad7ae926@300.jpg",
            link: "https://example.com/action-movie-1",
            cc: "EN",
            eps: 1,
            },
            {
            title: "Action Movie 2",
            image: "https://static.animekai.to/d6/i/1/ff/679c4922e156f@300.jpg",
            link: "https://example.com/action-movie-2",
            cc: "JP",
            eps: 1,
            },
            // Add similar structure for other entries
        ],
        comedyMovies: [
            {
                image: "https://static.animekai.to/31/i/4/14/67664938c8f51@300.jpg",
                link: "https://example.com/comedy-movie-1",
                cc: "EN",
                eps: 1,
            },
            {
                image: "https://static.animekai.to/dc/i/1/c8/67664941d062b@300.jpg",
                link: "https://example.com/comedy-movie-2",
                cc: "JP",
                eps: 1,
            },
            // Add similar structure for other entries
        ],
        horrorMovies: [
            {
                image: "https://static.animekai.to/ff/i/5/cb/67664a779d2c2@300.jpg",
                link: "https://example.com/horror-movie-1",
                cc: "EN",
                eps: 1,
            },
            {
                image: "https://static.animekai.to/7e/i/4/8b/6766493d27431@300.jpg",
                link: "https://example.com/horror-movie-2",
                cc: "JP",
                eps: 1,
            },
            // Add similar structure for other entries
        ],
        romanceMovies: [
            {
                title: "Yandere Dark Elf: She Chased Me All the Way from Another World",
                image: "https://img.flawlessfiles.com/_r/300x400/100/3a/ca/3aca0826a0b696c73bddb24bcb4aa2b4/3aca0826a0b696c73bddb24bcb4aa2b4.jpg",
                link: "https://yandere-dark-elf-she-chased-me-all-the-way-from-another-wo.pages.dev/",
                cc: "5",
                eps: "12",
            },
            {
                image: "https://static.animekai.to/f8/i/3/b8/677f1aaf7382d@300.jpg",
                link: "https://example.com/romance-movie-2",
                cc: "JP",
                eps: 1,
            },
            // Add similar structure for other entries
        ],
        drama: [
            {
                image: "https://static.animekai.to/0f/i/4/57/6776c22647a2b@300.jpg",
                link: "https://example.com/drama-1",
                cc: "EN",
                eps: 24,
            },
            {
                image: "https://static.animekai.to/d4/i/8/e2/677e939d95b5c@300.jpg",
                link: "https://example.com/drama-2",
                cc: "JP",
                eps: 12,
            },
            // Add similar structure for other entries
        ],
    };
    // Step 2: Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 2 seconds
        }, 900); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    // Step 3: Render loading screen or main content
    if (loading) {
        return (
            
            <div>
                <svg class="pl" width="240" height="240" viewBox="0 0 240 240" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
	<circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
	<circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
	<circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-dashoffset="-220" stroke-linecap="round"></circle>
	<circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-dashoffset="-220" stroke-linecap="round"></circle>
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
                <Row title="Thriller" posters={Posters.Thriller} />
                <Row title="Action" posters={Posters.actionMovies}/>
                <Row title="Comedy" posters={Posters.comedyMovies} />
                <Row title="Horror" posters={Posters.horrorMovies} />
                <Row title="Romance" posters={Posters.romanceMovies} />
                <Row title="Drama" posters={Posters.drama} />
            </div>
            <footer style={{ textAlign: 'center', padding: '5rem', backgroundColor: '#000' }}>
                <p>&copy; Copyright Aniwacth. All Rights Reserved
                 This site does not store any files on its server. All contents are provided by non-affiliated third parties.
                    Socials: 
             </p>
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
                    <a href="" style={{ display: 'inline-block'}}>
                    <img src='https://i.postimg.cc/hGXVFjTn/DALL-E-2025-03-25-19-51-32-A-sleek-dark-themed-logo-for-Anime-Flux-featuring-bold-anime-inspir.webp' alt="Anime Flux" style={{ width: "5rem"}}/>
                    </a>
                </div>
            </footer>
        </div>
    );
}

const Header = () => {
    const searchLinks = {
    
    "Solo Leveling Season 2 -Arise from the Shadow": { link: "https://animeflux-solo-leveling-arise-from-the-shadow-s02.pages.dev/", img: "https://static1.animekai.to/86/i/e/d4/67829cc6b52b8.jpg", year: "2025", type: "TV", rating: "R" },
    "Solo Leveling": { link: "https://animeflux-solo-leveling-s01.pages.dev/", img: "https://static1.animekai.to/a6/i/b/01/67664ac5d6eaa.jpg", year: "2024", type: "TV", rating: "R" },
    "Death Note": { link: "https://animeflux-deathnote.pages.dev/", img: "https://static1.animekai.to/7e/i/f/bf/67664a569f3a5@100.jpg", year: "2006", type: "TV", rating: "R" },
    "Shingeki no Kyojin": { link: "https://example.com/breaking-bad", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2013", type: "TV", rating: "R" },
    "Demon Slayer: Kimetsu no Yaiba": { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/", img: "https://static1.animekai.to/70/i/5/79/67664a9bdad80@300.jpg", year: "2019", type: "TV", rating: "PG-R" },
    "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/", img: "https://static1.animekai.to/78/i/0/44/67664a81b5dd4@300.jpg", year: "2021", type: "Movie", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/", img: "https://static1.animekai.to/d3/i/e/9c/67664a00ed86e@300.jpg", year: "2021", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/", img: "https://static1.animekai.to/28/i/d/60/67664938b51c4@300.jpg", year: "2023", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/", img: "https://static1.animekai.to/d1/i/d/30/67664a1707993@300.jpg", year: "2024", type: "TV", rating: "PG-R"},
    "Hunter x Hunter (2011)": {link:"", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2011", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S1": {link:"https://animeflux-jujutsukaisen-s01.pages.dev/", img: "https://static1.animekai.to/43/i/f/d2/67664a638ddda@100.jpg", year: "2020", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S2": {link:"https://animeflux-jujutsukaisen-s02.pages.dev/", img: "https://static1.animekai.to/44/i/9/b8/6766493099d89@100.jpg", year: "2021", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen 0": {link:"", img: "https://static1.animekai.to/8d/i/d/0f/67664a6c4ae80@100.jpg", year: "2022", type: "TV", rating: "PG-13"},
    "Puka Puka Juju": {link:"", img: "https://static1.animekai.to/a5/i/b/76/67664a0d0aeb9@100.jpg", year: "2023", type: "TV", rating: "PG-13"},
  };

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const movies = Object.keys(searchLinks);
    
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value.length > 0) {
          const results = movies.filter((movie) =>
            movie.toLowerCase().includes(value.toLowerCase())
          );
          setFilteredMovies(results);
        } else {
          setFilteredMovies([]);
        }
      };
    
      const handleKeyPress = (e) => {
        if (e.key === "Enter" && searchLinks[searchQuery]) {
          window.location.href = searchLinks[searchQuery];
        }
      };
    const navigateToRandomPage = () => {
        const pages = [
            "https://animeflux-sololeveling-arise-from-the-shadow-s02.pages.dev/",
            "https://animeflux-solo-leveling-s01.pages.dev/",
            "https://animeflux-deathnote.pages.dev/",
            "https://animeflux-jujutsukaisen-s02.pages.dev/",
            "https://animeflux-jujutsukaisen-s01.pages.dev/",
            "https://animeflux-chainsawman-s01.pages.dev/",
            "https://animeflux-slf-s01.pages.dev/",
            "https://anime-flux-bleach-re3j-s01.pages.dev/",
            "https://anime-flux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/",
            "https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/",
            "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/",
            "https://animeflux-hunter-x-hunter-2011.pages.dev/",
            "https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/",
            "https://animeflux-s.pages.dev/",
            "https://animeflux-sololevelingseason2arisefromtheshado-s02.pages.dev/",
            "https://animeflux-solo-leveling-s01.pages.dev/",
        ]
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        window.location.href = randomPage;
    };

    return (
        <header className="flex justify-between items-center p-4 bg-black w-full z-10">
            <div className="flex items-center space-x-4">
                <a href='/'> <img src="https://i.postimg.cc/hGXVFjTn/DALL-E-2025-03-25-19-51-32-A-sleek-dark-themed-logo-for-Anime-Flux-featuring-bold-anime-inspir.webp" alt="Anime Flux" style={{ width: "2rem"}} /></a>
                
                <nav className="hidden md:flex space-x-4">
                    
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">TV Shows</a>
                    <a href="#" className="hover:text-gray-400">Movies</a>
                    <a href="#" className="hover:text-gray-400">New & Popular</a>
                    <a href="#" className="hover:text-gray-400">My List</a>
                </nav>
            </div>
            <div className="flex items-center space-x-4" style={{ position: "absolute", right: "2rem" }}>
                <i className="fas fa-random hover:text-gray-400 cursor-pointer" onClick={navigateToRandomPage}></i> {/* New random icon with functionality */}
                <img src="https://i.postimg.cc/hGXVFjTn/DALL-E-2025-03-25-19-51-32-A-sleek-dark-themed-logo-for-Anime-Flux-featuring-bold-anime-inspir.webp" alt="User profile picture" className="w-8 h-8 rounded" />
        </div>
        <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search for a show..."
            className="w-full px-3 py-2 outline-none text-black"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {filteredMovies.length > 0 && (
          <ul
            className={`absolute w-full bg-gray-800 border border-gray-600 mt-1 rounded-lg shadow-lg overflow-hidden z-10 ${
              filteredMovies.length > 4 ? 'overflow-y-scroll max-h-60' : ''
            }`}
          >
            {filteredMovies.map((movie, index) => (
              <li
                key={index}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => window.location.href = searchLinks[movie].link}
                onKeyDown={handleKeyPress}
              >
                <img src={searchLinks[movie].img} alt={movie} className="w-12 h-12 rounded-md mr-3" />
                <div>
                  <p className="text-white font-bold">{movie}</p>
                  <p className="text-gray-400 text-sm">{searchLinks[movie].year} • {searchLinks[movie].type} • {searchLinks[movie].rating}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        </div>
        </header>
    );
};

const Banner = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slides = [
        {
            title: "JUJUTSU KAISEN",
            description: "A high school student becomes a Jujutsu Sorcerer to fight against cursed spirits.",
            rating: "R",
            release: "2022",
            quality: "HD",
            cc: "24",
            eps: "24",
            genre: "Adventure, Comedy, Fantasy",
            image: "https://rare-gallery.com/mocahbig/1376871-jujutsu-kaisen-anime-characters-4k-pc-wallpaper.jpg",
            watchNowLink: "https://animeflux-jujutsu-kaisen-s01.pages.dev/",
        },
        {
            title: "DEMON SLAYER",
            description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
            rating: "R",
            release: "2019",
            quality: "HD",
            cc: "26",
            eps: "26",
            genre: "Action, Supernatural, Dark Fantasy",
            image: "https://wallpapercave.com/wp/wp11268662.jpg",
            watchNowLink: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/",
        },
        {
            title: "SOLO LEVELING",
            description: "A weak hunter gains the ability to level up and becomes the strongest hunter in the world.",
            rating: "R",
            release: "2024",
            quality: "HD",
            cc: "12",
            eps: "12",
            genre: "Action, Adventure, Supernatural",
            image: "https://static.animecorner.me/2023/11/1698837096-72473.jpg",
            watchNowLink: "https://animeflux-solo-leveling-s01.pages.dev/",
        },
        {
            title: "The Shiunji Family Children",
            description: "The story follows the life of Arata Shiunji and his six siblings as they navigate the complexities of their relationships after discovering they are not biologically related.",
            rating: "PG",
            release: "1997",
            quality: "HD",
            cc: "1000",
            eps: "1000",
            genre: "Adventure, Fantasy, Comedy",
            image: "https://static1.animekai.to/f9/i/f/71/67fe6a71ccb62.jpg",
            watchNowLink: "https://animeflux-the-shiunji-family-children.pages.dev/",
        },
	    {
            title: "Attack on Titan",
            description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls.",
            rating: "R",
            release: "2013",
            quality: "HD",
            cc: "25",
            eps: "25",
            genre: "Adventure, Fantasy, Comedy",
            image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
            watchNowLink: "https://attack-on-titan.pages.dev/",
        },
    ];
	

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <div
            className="relative h-[70vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url('${currentSlide.image}')` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-4xl p-10 text-white">
                <h1 className="text-5xl font-extrabold mb-4">{currentSlide.title}</h1>
                <div className="flex space-x-2 mb-2">
                    <span className="bg-red-800 text-red-300 px-2 py-1 rounded text-xs font-semibold">CC {currentSlide.cc}</span>
                    <span className="bg-green-800 text-green-300 px-2 py-1 rounded text-xs font-semibold">{currentSlide.eps}</span>
                    <span className="text-sm font-semibold">TV</span>
                    <span className="ml-4 text-sm">{currentSlide.genre}</span>
                </div>
                <p className="max-w-lg mb-6">{currentSlide.description}</p>
                <div className="bg-black bg-opacity-70 rounded-lg p-4 w-max flex space-x-8 mb-6">
                    <div>
                        <p className="text-gray-400 text-xs">Rating</p>
                        <p className="font-bold">{currentSlide.rating}</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Release</p>
                        <p className="font-bold">{currentSlide.release}</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Quality</p>
                        <p className="font-bold">{currentSlide.quality}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href={currentSlide.watchNowLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-semibold">
                            WATCH NOW
                        </button>
                    </a>
                    <button className="text-white text-2xl" title="Bookmark">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-7 7 7V5z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-10 right-10 flex items-center space-x-4 text-white">
                <button onClick={prevSlide} title="Previous" className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span className="text-lg font-semibold">{currentIndex + 1} / {slides.length}</span>
                <button onClick={nextSlide} title="Next" className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Badge = ({ label, color }) => (
    <span
        className={`text-xs px-2 py-1 rounded-full font-semibold ${
            color === 'red'
                ? 'bg-red-900 text-red-300'
                : 'bg-green-900 text-green-300'
        }`}
    >
        {label}
    </span>
);

const Row = ({ title, posters = [] }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4" aria-label={title}>{title}</h2>
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-2">
                <div className="scrollmenu1 flex space-x-4">
                    {posters.slice(0, 15).map((poster, index) => (
                        <a href={poster.link} target="_blank" rel="noopener noreferrer" key={index} className="flex-shrink-0 w-40">
                            <img
                                src={poster.image}
                                alt={`Movie poster ${index + 1}`}
                                className="w-full h-60 object-cover rounded-lg"
                            />
                            <p className="mt-2 text-white text-sm truncate" title={poster.title}>{poster.title}</p>
                            <div className="flex items-center space-x-2 mt-1">
                                {poster.cc !== undefined && (
                                    <span className="badge-red">CC {poster.cc}</span>
                                )}
                                {poster.eps !== undefined && (
                                    <span className="badge-green">{poster.eps}</span>
                                )}
                                <span className="badge-tv">TV</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
