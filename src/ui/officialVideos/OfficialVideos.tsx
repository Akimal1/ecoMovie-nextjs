import React from "react";
import scss from "./officialVideos.module.scss";
import VideoCard from "../videoCard/VideoCard";

interface OfficialProps {
  title: string;
  data: any[];
  isVideo?: boolean;
}

export default function OneMovieOfficialVideos({
  title,
  data = [],
  isVideo = false,
}: OfficialProps) {

  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.main}>
            <h4>{title}</h4>

            <div className={scss.list}>
              {isVideo ? (
                data.map((item, idx) => <VideoCard key={idx} movie={item} />)
              ) : (
                <p className={scss.noVideos}>No videos found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
