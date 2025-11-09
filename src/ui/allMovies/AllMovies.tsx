import { useState, useMemo } from "react";
import Card from "../card/Card";
import scss from "./allMovies.module.scss";

interface SectionCardProps {
  isLoading: boolean;
  data: any[];
}

export default function AllMovies({ data=[], isLoading }: SectionCardProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  const filteredAndSorted = useMemo(() => {
    let filtered = [...data];

    if (selectedGenre) {
      const genreMap: Record<string, number> = {
        action: 28,
        adventure: 12,
        animation: 16,
        comedy: 35,
        crime: 80,
        documentary: 99,
        drama: 18,
        family: 10751,
        fantasy: 14,
      };

      const selectedGenreId = genreMap[selectedGenre];
      filtered = filtered.filter((movie) =>
        movie.genre_ids.includes(selectedGenreId)
      );
    }

    switch (sortOption) {
      case "popularity descending":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case "popularity ascending":
        filtered.sort((a, b) => a.popularity - b.popularity);
        break;
      case "rating descending":
        filtered.sort((a, b) => b.vote_average - a.vote_average);
        break;
      case "rating ascending":
        filtered.sort((a, b) => a.vote_average - b.vote_average);
        break;
      case "release date descending":
        filtered.sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
        break;
      case "release date ascending":
        filtered.sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );
        break;
      case "title(a-z)":
        filtered.sort((a, b) =>
          (a.title || "").localeCompare(b.title || "")
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [data, selectedGenre, sortOption]);

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h3>Explore Movies</h3>
            <div className={scss.options}>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="">Select genres</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="animation">Animation</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="drama">Drama</option>
                <option value="family">Family</option>
                <option value="fantasy">Fantasy</option>
              </select>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="popularity descending">Popularity ↓</option>
                <option value="popularity ascending">Popularity ↑</option>
                <option value="rating descending">Rating ↓</option>
                <option value="rating ascending">Rating ↑</option>
                <option value="release date descending">Release Date ↓</option>
                <option value="release date ascending">Release Date ↑</option>
                <option value="title(a-z)">Title (A-Z)</option>
              </select>
            </div>
          </div>

          <div className={scss.list}>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : filteredAndSorted.length > 0 ? (
              filteredAndSorted.map((item, idx) => (
                <Card selected="movie" key={idx} movie={item} />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
