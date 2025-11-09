import { useSimilarMovies } from "@/hooks/movies/similar/Similar";
import SectionCard from "@/ui/sectionCard/SectionCard";
import { useParams } from "next/navigation";
import React from "react";

const Similar = () => {
  const { id } = useParams();
  const { data: similarMovies, isLoading } = useSimilarMovies({
    type: "movie",
    id: id,
  });
  return (
    <SectionCard
      data={similarMovies}
      isLoading={isLoading}
      title="Similar Movies"
      toggle=""
      key={1}
    />
  );
};

export default Similar;
