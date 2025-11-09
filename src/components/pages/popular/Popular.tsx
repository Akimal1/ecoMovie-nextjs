"use client";
import { usePopular } from "@/hooks/movies/popular/useTopPopular";
import SectionCard from "@/ui/sectionCard/SectionCard";
import React from "react";

const Popular = () => {
  const { data: popularMovies, isLoading } = usePopular("movie");
  return (
    <SectionCard
      data={popularMovies}
      isLoading={isLoading}
      title="What's Popular"
      toggle="movie | tv show"
      key={1}
    />
  );
};

export default Popular;
