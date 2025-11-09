"use client";
import { useGetTrending } from "@/hooks/movies/trending/Trending";
import { useTvShows } from "@/hooks/movies/tvShows/TvShows";
import SectionCard from "@/ui/sectionCard/SectionCard";
import React from "react";

const Trending = () => {
  const { data: trendingMovies, isLoading } = useGetTrending("day");
  return (
    <SectionCard
      isLoading={isLoading}
      data={trendingMovies}
      title="Trending"
      toggle="day | week"
      key={0}
    />
  );
};

export default Trending;
