import './App.css';
import React, { useState, useEffect } from 'react';
import { FaRandom, FaSearch } from "react-icons/fa";


function App() {
    const [loading, setLoading] = useState(true); // Step 1: Create loading state
    const Posters = {
        trending: [
            {
                image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/65f92e6e315a931ef872da4b312442b8.jpg",
                link: "https://https://animeflux-solo-leveling-arise-from-the-shadow-s02.pages.dev/",
            },
            {
                image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/82402f796b7d84d7071ab1e03ff7747a.jpg",
                link: "https://animeflux-jujutsukaisen-s01.pages.dev/",
            },
            {
                image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3da1326e07269ddd8d73475c5dabf2c.jpg",
                link: "https://animeflux-chainsawman-s01.pages.dev/",
            },
            {
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTp7vq4UrZIjGOagDWfRsbHkKwGb-IzZtzdguuRdfrmNo7PMXEqnulncHFFJo_-_WbXhEk46A_CjG3LgCy7Wd2QwedtXVjfrtHVi6RaoK8",
                link: "https://animeflux-slf-s01.pages.dev/",
            },
            {
                image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bd5ae1d387a59c5abcf5e1a6a616728c.jpg",
                link: "https://anime-flux-bleach-re3j-s01.pages.dev/",
            },
            {
                image: "https://demonslayer-anime.com/hta/assets/img/img_kv.jpg",
                link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training.pages.dev/",
            },
            {
                image: "https://static1.animekai.to/28/i/d/60/67664938b51c4.jpg",
                link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village.pages.dev/",
            },
            {
                image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b51f863b05f30576cf9d85fa9b911bb5.png",
                link: "https://animeflux-jujutsukaisen-s02.pages.dev/",
            }
        ],
        Thriller: [
            {
                image: "https://static.animekai.to/b8/i/f/ae/67664a35ada83@300.jpg",
                link: "https://animeflux-code-geass-rozeof-there-capture.pages.dev/",
            },
            {
                image: "https://static.animekai.to/69/i/c/a7/676649399560d@300.jpg",
                link: "https://animeflux-link-click-2.pages.dev/",
            },
            {
                image: "https://static.animekai.to/b5/i/e/2c/676649f8a3e07@300.jpg",
                link: "https://animeflux-psyco-pass-3-first-inspector.pages.dev/",
            },
            {
                image: "https://static.animekai.to/c8/i/b/0e/67664a77256df@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/5f/i/1/37/676649371ece4@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/b5/i/1/2a/67664980ec7d0@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/fb/i/4/0b/6766495e55d54@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/e6/i/3/83/6766496e936a6@300.jpg",
                link: "",
            },

        ],
        actionMovies: [
            {
                image: "https://static.animekai.to/9b/i/a/bd/67664ad7ae926@300.jpg",
                link: "",
            },
            {
                image:"https://static.animekai.to/d6/i/1/ff/679c4922e156f@300.jpg",
                link: ""
            },
            {
                image:"https://static.animekai.to/fa/i/3/93/67664a559994b@300.jpg",
                link: ""
            },
            {
                image:"https://static.animekai.to/5e/i/e/e7/67664a6eed6be@300.jpg",
                link: ""
            },
            {
                image:"https://static.animekai.to/d4/i/8/e2/677e939d95b5c@300.jpg",
                link: ""
            },
            {
                image:"https://static.animekai.to/02/i/a/41/67664920ca41a@300.jpg",
                link: ""
            },
            {
                image:"https://static.animekai.to/ef/i/7/81/676649604795f@300.jpg",
                link: ""
            },
            {
                image:"https://static.animekai.to/d6/i/1/ff/679c4922e156f@300.jpg",
                link: ""
            },
        ],
        comedyMovies: [
            {
                image: "https://static.animekai.to/31/i/4/14/67664938c8f51@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/dc/i/1/c8/67664941d062b@300.jpg",
                link  : "",
            },
            {
                image: "https://static.animekai.to/2c/i/1/fb/67664a390d313@300.jpg",
                link  : "",
            },
            {
                image: "https://static.animekai.to/9e/i/8/45/67664a28e0da0@300.jpg",
                link  : "",
            },
            {
                image: "https://static.animekai.to/26/i/c/9c/67664a7b71d19@300.jpg",
                link  : "",
            },
            {
                image: "https://static.animekai.to/2e/i/a/a7/676649c604ff9@300.jpg",
                link  : "",
            },
            {
                image: "https://static.animekai.to/84/i/7/60/6783ef67bb6a4@300.jpg",
                link  : "",
            },
            {
                image: "https://static.animekai.to/4a/i/e/73/6783f0076823e@300.jpg",
                link  : "",
            },

        ],
        horrorMovies: [
            {
                image: "https://static.animekai.to/ff/i/5/cb/67664a779d2c2@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/7e/i/4/8b/6766493d27431@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/66/i/6/6e/67664aa40414d@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/d2/i/9/aa/676649657dd8a@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/46/i/6/cb/67664a5f692c8@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/e5/i/1/1e/6796f95d7c31b@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/87/i/6/45/67c315dfdf0c5@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/94/i/d/99/67849c61ef884@300.jpg",
                link: "",
            },
        ],
        romanceMovies: [
            {
                image: "https://static.animekai.to/1b/i/8/2a/6766499dd3fad@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/f8/i/3/b8/677f1aaf7382d@300.jpg",
                link: "",

            },

            {
                image: "https://static.animekai.to/dc/i/1/c8/67664941d062b@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/26/i/c/9c/67664a7b71d19@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/48/i/2/fe/677d56f5276f4@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/43/i/a/d4/677c071ad504a@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/84/i/9/c8/67979b6317fd2@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/66/i/e/90/67780faf0eabe@300.jpg",
                link: "",
            },

        ],
        drama: [
            {
                image: "https://static.animekai.to/0f/i/4/57/6776c22647a2b@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/d4/i/8/e2/677e939d95b5c@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/24/i/4/f3/6783f05a803ec@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/27/i/5/8e/677c0793f40c2@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/8c/i/5/60/6781b2ff4bfa2@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/08/i/5/36/67664a33f2129@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/bc/i/a/37/67814f97efb26@300.jpg",
                link: "",
            },
            {
                image: "https://static.animekai.to/5a/i/9/b2/67664a1990c8a@300.jpg",
                link: "",
            },
            
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
    "Attack on Titan": { link: "https://animeflux-attack-on-titan.pages.dev/", img: "https://static1.animekai.to/45/i/b/79/67664a45311fc.jpg", year: "2013", type: "TV", rating: "R" },
    "Attack on Titan Season 2": { link: "https://animeflux-attack-on-titan-s02.pages.dev/", img: "https://static1.animekai.to/5e/i/a/0f/67664974bab5b.jpg", year: "2017", type: "TV", rating: "R" },
    "Attack on Titan Season 3 Part 1": { link: "https://animeflux-attack-on-titan-s03-part-1.pages.dev/", img: "https://static1.animekai.to/db/i/3/66/6766491f06b76@300.jpg", year: "2018", type: "TV", rating: "R" },
    "Attack on Titan Season 3 Part 2": { link: "https://animeflux-attack-on-titan-s03-part-2.pages.dev/", img: "https://static1.animekai.to/93/i/b/e9/6766496c980c9@300.jpg", year: "2019", type: "TV", rating: "R" },
    "Attack on Titan Season 4 Part 1": { link: "https://animeflux-attack-on-titan-s04-part-1.pages.dev/", img: "https://static1.animekai.to/83/i/4/9a/6766499bd3723@300.jpg", year: "2020", type: "TV", rating: "R" },
    "Attack on Titan Season 4 Part 2": { link: "https://animeflux-attack-on-titan-s04-part-2.pages.dev/", img: "https://static1.animekai.to/2d/i/0/1e/67664a0891c70@300.jpg", year: "2022", type: "TV", rating: "R" },
    "Attack on Titan Speacial": { link: "https://animeflux-attack-on-titan-special.pages.dev/", img: "https://static1.animekai.to/a0/i/f/68/6766493f4e009@300.jpg", year: "2023", type: "TV", rating: "R" },    
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
    "Sakamot Days": { link:"https://animeflux-sakamoto-days.pages.dev/", img: "https://static1.animekai.to/09/i/e/90/6782958e57c23.jpg", year: "2025", type: "TV", rating: "R" },
    "Tower of god s01": { link:"https://animeflux-tower-of-god-s01.pages.dev/", img: "https://static1.animekai.to/ca/i/8/0a/67664a6d3f5a2.jpg", year: "2020", type: "TV", rating: "PG-13" },
    "Tower of god s02": { link:"https://animeflux-tower-of-god-s02.pages.dev/", img: "https://static1.animekai.to/3c/i/b/05/676649ad3a95d.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "Wind Breaker": { link:"https://animeflux-windbreaker.pages.dev/", img: "https://static1.animekai.to/bd/i/5/4c/676649ee7430d.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "One Punch man s01": { link:"https://animeflux-one-punch-man-s01.pages.dev/", img: "https://static1.animekai.to/db/i/0/b6/67664ab866dbf.jpg", year: "2015", type: "TV", rating: "R" },
    "One Punch man s02": { link:"https://animeflux-one-punch-man-s02.pages.dev/", img: "https://static1.animekai.to/8d/i/b/f4/676649c3e82f2.jpg", year: "2019", type: "Tv", rating: "R" },
    "Ao Ashi": { link:"https://animeflux-ao-ashi.pages.dev/", img: "https://static1.animekai.to/03/i/3/1f/6766494451516.jpg", year: "2022", type: "TV", rating: "PG-13" },
    "Blue Lock s01": { link:"https://animeflux-bluelock-s01.pages.dev/", img: "https://static1.animekai.to/34/i/3/bd/67664ab2e7771.jpg", year: "2022", type: "TV", rating: "PG-13" },
    "Blue Lock s02": { link:"devhttps://animeflux-bluelock-s02.pages./", img: "https://static1.animekai.to/56/i/d/36/67664aa7a69dd.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "God of high school": { link:"/https://animeflux-god-of-high-school.pages.dev", img: "https://static1.animekai.to/4d/i/1/d8/67664984e84a9.jpg", year: "2020", type: "TV", rating: "PG-13" },
    "Psyco Pass 1": { link:"https://animeflux-psyco-pass-2-first-inspector.pages.dev/", img: "https://static1.animekai.to/f1/i/f/ba/67664970838b9.jpg", year: "2012", type: "TV", rating: "R" },
    "Code Geass: Lelouch of the Rebellion": { link:"https://animeflux-code-geass-lelouch-of-the-rebellion.pages.dev/", img: "https://static1.animekai.to/4d/i/3/52/67664928cd5ca.jpg", year: "2006", type: "TV", rating: "R" },
    "That Time I Got Reincarnated as a Slime S01": { link:"https://animeflux-that-time-i-got-reicarnated-as-slime-s01.pages.dev/", img:"https://static1.animekai.to/12/i/9/08/676649d245eb3.jpg", year: "2018", type: "TV", rating: "PG-13" },
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
	    "https://animeflux-attack-on-titan-s02.pages.dev/",
	    "https://animeflux-attack-on-titan.pages.dev/",
	    "https://animeflux-attack-on-titan-s03-part-2.pages.dev/",
	    "https://animeflux-attack-on-titan-s03-part-1.pages.dev/",
	    "https://animeflux-attack-on-titan-s04-part-1.pages.dev/",
	    "https://animeflux-attack-on-titan-s04-part-2.pages.dev/",
	    
        ]
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        window.location.href = randomPage;
    };

    return (
        <header className="flex justify-between items-center p-4 bg-black fixed w-full z-10">
            <div className="flex items-center space-x-4">
                <a href='/'> <img src="https://i.postimg.cc/hGXVFjTn/DALL-E-2025-03-25-19-51-32-A-sleek-dark-themed-logo-for-Anime-Flux-featuring-bold-anime-inspir.webp" alt="Anime Flux" style={{ width: "2rem"}} /></a>
                <nav className="hidden md:flex space-x-4">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">TV Shows</a>
                    <a href="#" className="hover:text-gray-400">Movies</a>
                    <a href="#" className="hover:text-gray-400">New & Popular</a>
                    <a href="#" className="hover:text-gray-400">My List</a>
                </nav>
            </div>
            <div className="flex items-center space-x-4" style={{ position: "absolute", right: "2rem" }}>
                <i className="fas fa-search hover:text-gray-400"></i>
                <i className="fas fa-bell hover:text-gray-400"></i>
                <i className="fas fa-random hover:text-gray-400 cursor-pointer" onClick={navigateToRandomPage}></i> {/* New random icon with functionality */}
                <img src="https://i.postimg.cc/hGXVFjTn/DALL-E-2025-03-25-19-51-32-A-sleek-dark-themed-logo-for-Anime-Flux-featuring-bold-anime-inspir.webp" alt="User profile picture" className="w-8 h-8 rounded" />
        </div>
        <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white p-2">
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
          <ul className="absolute w-full bg-gray-800 border border-gray-600 mt-1 rounded-lg shadow-lg overflow-hidden">
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://rare-gallery.com/mocahbig/1376871-jujutsu-kaisen-anime-characters-4k-pc-wallpaper.jpg",
        "https://wallpapercave.com/wp/wp11268662.jpg",
        "https://static.animecorner.me/2023/11/1698837096-72473.jpg",
        "https://horizons.pokemon.com/images/share-fb.jpg",
	"https://cdn.oneesports.gg/cdn-data/2024/09/Anime_Shangri-LaFrontier_Season2_PromoPoster.jpg",
	"https://anitrendz.net/news/wp-content/uploads/2025/03/makina-san-is-a-love-bot-anime-key-visual-scaled-e1742934440120.jpg",
        // Add more image URLs as needed
    ];

    const texts = [
        "Jujutsu Kaisen - Experience the thrill!",
        "Epic Adventures Await - Watch Now!",
        "Dive into the Anime World!",
        "Catch 'em all in Pokemon!",
	"Shangri-La Frontier",
	"Makina-san's a Love Bot",
        // Add more texts corresponding to the images
    ];

    const links = [
        "https://www.youtube.com/watch?v=Pm-wNmS9RGI",
        "https://www.youtube.com/watch?v=wyiZWYMilgk",
        "https://www.youtube.com/watch?v=Px3mYbqYSEM",
        "https://youtu.be/_c_hMehCORQ?si=wJgHL9AtGSxZcftJ",
	"https://www.youtube.com/watch?v=VA0rTiDlm8w&ab_channel=Crunchyroll",
	"https://www.youtube.com/watch?v=kpTMzdEpciA&ab_channel=DailyAnime%21",
        // Add more links corresponding to the images
    ];

    const links1 = [
        "https://animeflux-jujutsukaisen-s01.pages.dev/",
        "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/",
        "https://animeflux-solo-leveling-s01.pages.dev/",
        "https://youtu.be/_c_hMehCORQ?si=wJgHL9AtGSxZcftJ",
	"https://animeflux-slf-s02.pages.dev/"
	"https://animeflux-makina-san's-a-love-bot.pages.dev/"
        // Add more links corresponding to the images
    ];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('${images[currentIndex]}')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-10 left-10">
                <h1 className="text-white text-3xl font-bold">{texts[currentIndex]}</h1> {/* Display the corresponding text */}
                <div className="mt-4 flex space-x-2">
                    <img 
                        src="https://i.pinimg.com/736x/fe/63/3f/fe633f65fbdb702027be5beeaaf1ce92.jpg" style={{ transform: 'scaleX(-1)' }} 
                        className="w-10 h-10 cursor-pointer" 
                        onClick={prevImage} 
                    />
                    <img 
                        src="https://i.pinimg.com/736x/fe/63/3f/fe633f65fbdb702027be5beeaaf1ce92.jpg" 
                        className="w-10 h-10 cursor-pointer" 
                        onClick={nextImage} 
                    />
                </div>
                <div className="mt-4">
                    <a href={links[currentIndex]} target="_blank" rel="noopener noreferrer">
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                            Watch Trailer
                        </button>
                    </a>
                    <a href={links1[currentIndex]} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                            Watch Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Row = ({ title, posters = [] }) => {
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
};

export default App;
