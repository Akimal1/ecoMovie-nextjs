"use client";
import { useRouter } from "next/navigation";
import scss from "./card.module.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CardProps {
  movie: ICard;
  selected: "movie" | "tv";
}

interface ICard {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  id: number;
}

const Card = ({ movie, selected }: CardProps) => {
  const { push } = useRouter();

  const value =
    movie.vote_average.toString().length > 3
      ? Number(movie.vote_average.toString().slice(0, 3))
      : movie.vote_average;

  const getColor = (val: number) => {
    if (val < 5) return "red";
    if (val < 7) return "orange";
    return "green";
  };

  return (
    <div className={scss.card} onClick={() => push(`/${selected}/${movie.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={170}
        height={230}
      />

      <div className={scss.scale}>
        <CircularProgressbar
          value={value}
          maxValue={10}
          text={`${value}`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "27px",
            pathTransitionDuration: 0.5,
            pathColor: getColor(value),
            textColor: "black",
            trailColor: "grey",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>

      <div className={scss.genres}>
        {movie.genre_ids.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>

      <div className={scss.title}>
        <h4>
          {movie?.title.length > 15
            ? movie?.title.slice(0, 12) + "..."
            : movie.title}
        </h4>
        <p>{movie?.release_date}</p>
      </div>
    </div>
  );
};

export default Card;
