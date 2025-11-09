import { API_KEY } from "@/constants/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type MovieIDS = {
  type: "movie" | "tv";
  id: any;
};

export const useRecomendations = ({ type, id }: MovieIDS) => {
  return useQuery({
    queryKey: ["recomendations"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
};
