"use client";
import { useGetAllMovies } from "@/hooks/movies/allMovies/AllMovies";
import scss from "./page.module.scss";
import AllMovies from "@/ui/allMovies/AllMovies";

export default function page() {
  const { data: allMovies, isLoading } = useGetAllMovies();

  return (
    <div className={scss.list}>
      <AllMovies isLoading={isLoading} data={allMovies} key={0} />
    </div>
  );
}
