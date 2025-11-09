import { API_KEY } from "@/constants/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type MovieTv = "movie" | "tv";

export const useTvShows = (toggleTv: MovieTv = "tv") => {
  return useQuery({
    queryKey: ["tvShows"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/${toggleTv}?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
};
