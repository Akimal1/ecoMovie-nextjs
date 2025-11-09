"use client";
import { useRouter } from "next/navigation";
import scss from "./tvCard.module.scss";

interface CardProps {
  tv: ICard;
  selected: "movie" | "tv";
}

interface ICard {
  poster_path: string;
  name: string;
  first_air_date: string;
  vote_average: number;
  genre_ids: number[];
  id: number;
}

const TvCard = ({ tv, selected }: CardProps) => {
  const { push } = useRouter();

  return (
    <div className={scss.card} onClick={() => push(`/${selected}/${tv.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
        alt=""
        width={170}
        height={230}
      />
      <div className={scss.scale}>
        {tv.vote_average.toString().length > +3
          ? tv.vote_average.toString().slice(0, 3)
          : tv.vote_average}
      </div>
      <div className={scss.genres}>
        {tv.genre_ids.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
      <div className={scss.title}>
        <h4>{tv.name.length > 15 ? tv.name.slice(0, 12) + "..." : tv.name}</h4>
        <p>{tv?.first_air_date}</p>
      </div>
    </div>
  );
};

export default TvCard;
