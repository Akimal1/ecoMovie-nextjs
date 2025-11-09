"use client";
import SearchInput from "@/ui/searchInput/SearchInput";
import scss from "./banner.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { useGetAllMovies } from "@/hooks/movies/allMovies/AllMovies";

export default function Banner() {
  const { data } = useGetAllMovies();
  const randomMovie =
    data && data.length > 0
      ? data[Math.floor(Math.random() * data.length)]
      : null;
  const bannerQuotes = [
    "Welcome to TmdbMovie - Enjoy the Show!",
    "Discover Movie Magic at TmdbMovie",
    "Get Ready for Cinematic Bliss",
  ];
  return (
    <div
      style={{
        background: `url(https://image.tmdb.org/t/p/original${randomMovie?.poster_path})`,
      }}
      className={scss.container}
    >
      <div className={scss.overlay}></div>
      <div className="container">
        <div className={scss.mainContainer}>
          <Typewriter
            words={bannerQuotes}
            loop={0}
            typeSpeed={80}
            deleteSpeed={40}
          />
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
