"use client";
import scss from "./oneMovie.module.scss";
import { useParams } from "next/navigation";
import { useActors } from "@/hooks/movies/actors/useActors";
import { useOneMovie } from "@/hooks/movies/oneMovie/OneMovie";
import OneMovieCarousel from "../oneMovieCarousel/OneMovieCarousel";
import { FaRegCirclePlay } from "react-icons/fa6";
import OneMovieSimilar from "../similar/Similar";
import { useSimilarMovies } from "@/hooks/movies/similar/Similar";
import OneMovieRecomendations from "../recomendations/Recomendations";
import { useRecomendations } from "@/hooks/movies/recomendations/Recomendations";

export default function OneTV() {
  const { id } = useParams();
  const { data: oneMovie, isLoading } = useOneMovie({ type: "tv", id: id });

  const { data: actors, isLoading: isActorLoading } = useActors({
    type: "tv",
    id: id,
  });

  const {data:recomendations,isLoading:isRecomen}=useRecomendations({type: "tv", id: id})

  const {data:similarMovies}=useSimilarMovies({type: "tv",
    id: id,})
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className={scss.container}>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${oneMovie?.backdrop_path}")`,
        }}
        className={scss.overlay}
      ></div>
      <div className="container">
        <div className={scss.mainContainer}>
          <img
            src={`https://image.tmdb.org/t/p/original${oneMovie?.poster_path}`}
            alt=""
          />
          <div className={scss.titleCard}>
            <h2>{oneMovie?.title}</h2>
            <h4>{oneMovie?.tagline}</h4>
            <div className={scss.genre}>
              {oneMovie?.genres.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
            <div className={scss.play}>
              <div className={scss.trailer}>
                <div className={scss.rating}>
                  <h4>{oneMovie?.vote_average}</h4>
                </div>
                <div className={scss.btnPlay}>
                  <span>
                    <FaRegCirclePlay />
                  </span>
                  <h4>Watch trailer</h4>
                </div>
              </div>
            </div>
            <div className={scss.overview}>
              <h4>Overview</h4>
              <p>{oneMovie?.overview}</p>
            </div>
            <div className={scss.status}>
              <p>
                Status: <span>{oneMovie?.status}</span>
              </p>
              <p>
                Release date: <span>{oneMovie?.release_date}</span>
              </p>
              <p>
                Runtime: <span>{oneMovie?.runtime}m</span>
              </p>
            </div>
            <div className={scss.status}>
              <p>
                Writer: <span>{oneMovie?.production_companies[0].name}</span>
              </p>
            </div>
            <div className={scss.status}>
              <p>
                Director: <span>{oneMovie?.production_companies[0].name}</span>
              </p>
            </div>
          </div>
        </div>
        <OneMovieCarousel
          title="Top Cast"
          data={actors}
          isLoading={isActorLoading}
          isCast={true}
        />
        <OneMovieSimilar
          title="Similar Movie"
          data={similarMovies}
          isSimilar={true}
          isLoading={isLoading}

        />
        <OneMovieRecomendations
        title="Recomendations"
        data={recomendations}
        isRecomen={true}
        isLoading={isLoading}
        />

      </div>
    </section>
  );
}
