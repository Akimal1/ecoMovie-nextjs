"use client";
import scss from "./page.module.scss";
import { useTvShows } from "@/hooks/movies/tvShows/TvShows";
import AllTVs from "@/ui/allTVs/AllTvs";

export default function page() {
  const { data: tvShows, isLoading } = useTvShows();
  return (
    <div className={scss.list}>
      <AllTVs isLoading={isLoading} dataTV={tvShows} key={0} />
    </div>
  );
}

