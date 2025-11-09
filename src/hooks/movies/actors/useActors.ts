import { API_KEY } from "@/constants/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type actorParams = {
  type: "movie" | "tv";
  id: string | undefined;
};

export const useActors = ({ type, id }: actorParams) => {
  return useQuery({
    queryKey: ["actors", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`
      );
      return response.data.cast;
    },
  });
};
