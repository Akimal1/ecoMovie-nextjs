import React, { useState } from "react";
import scss from "./videoCard.module.scss";
import { FaRegCirclePlay } from "react-icons/fa6";

interface VideoProps {
  movie: {
    key: string;
    name: string;
    site: string;
  };
}

const VideoCard = ({ movie }: VideoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const thumbnail =
    movie.site === "YouTube"
      ? `https://img.youtube.com/vi/${movie.key}/hqdefault.jpg`
      : "https://via.placeholder.com/220x180?text=No+Preview";

  return (
    <>
      <div className={scss.list} onClick={() => setIsOpen(true)}>
        <img src={thumbnail} alt={movie.name} />
        <span className={scss.playIcon}>
          <FaRegCirclePlay />
        </span>
        <p className={scss.title}>{movie.name}</p>
      </div>

      {isOpen && (
        <div className={scss.modal} onClick={() => setIsOpen(false)}>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}?autoplay=1`}
            title={movie.name}
            allow="autoplay; fullscreen"
          />
        </div>
      )}
    </>
  );
};

export default VideoCard;
