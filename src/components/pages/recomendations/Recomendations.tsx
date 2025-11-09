import { useRecomendations } from "@/hooks/movies/recomendations/Recomendations";
import SectionCard from "@/ui/sectionCard/SectionCard";
import { useParams } from "next/navigation";
import React from "react";

const Recomendations = () => {
  const { id } = useParams();
  const { data: recomendations, isLoading } = useRecomendations({
    type: "movie",
    id: id,
  });
  return (
    <SectionCard
      data={recomendations}
      isLoading={isLoading}
      title="Recomendations"
      toggle=""
      key={1}
    />
  );
};

export default Recomendations;

