"use client";
import { useTopRated } from "@/hooks/movies/topRated/useTopRated";
import SectionCard from "@/ui/sectionCard/SectionCard";

const TopRated = () => {
  const { data: topRatedMovies, isLoading } = useTopRated("movie");
  return (
    <SectionCard
      data={topRatedMovies}
      isLoading={isLoading}
      title="Top Rated"
      key={2}
      toggle="movie | tv show"
    />
  );
};

export default TopRated;