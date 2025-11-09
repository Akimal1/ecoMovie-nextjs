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
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useOfficialVideos } from "@/hooks/movies/officialVideos/officialVideos";
import OneMovieOfficialVideos from "../officialVideos/OfficialVideos";
import { useState } from "react";
import { log } from "console";

export default function OneMovie() {
  const { id } = useParams();
  const { data: oneMovie, isLoading } = useOneMovie({ type: "movie", id: id });
  console.log(oneMovie);

  const { data: actors, isLoading: isActorLoading } = useActors({
    type: "movie",
    id: id,
  });

  const { data: recomendations, isLoading: isRecomen } = useRecomendations({
    type: "movie",
    id: id,
  });

  const { data: similarMovies } = useSimilarMovies({ type: "movie", id: id });

  const { data: officialVideos, isLoading: isVideoLoading } = useOfficialVideos(
    { type: "movie", id: id }
  );
  const [isOpen, setIsOpen] = useState(false);
  const trayler = officialVideos?.[0]?.key;

  const value =
    oneMovie?.vote_average.toString().length > 3
      ? Number(oneMovie?.vote_average.toString().slice(0, 3))
      : oneMovie?.vote_average;

  const getColor = (val: number) => {
    if (val < 5) return "red";
    if (val < 7) return "orange";
    return "green";
  };
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
                <div className={scss.btnPlay} onClick={() => setIsOpen(true)}>
                  <span>
                    <FaRegCirclePlay />
                  </span>
                  <h4>Watch trailer</h4>
                  {isOpen && (
                    
                    <div
                      className={scss.modal}
                      onClick={() => setIsOpen(false)}
                      
                    >
                      <p onClick={()=>setIsOpen(false)}>close</p>
                      <iframe
                        src={`https://www.youtube.com/embed/${trayler}?autoplay=1`}
                        title={oneMovie?.name}
                        allow="autoplay; fullscreen"
                      />
                    </div>
                  )}
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

        <OneMovieOfficialVideos
          title="Officiall Videos"
          data={officialVideos}
          isVideo={true}
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
