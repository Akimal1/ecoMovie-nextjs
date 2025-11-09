import { API_KEY } from "@/constants/Api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type oneMovieIds = {
  type: "movie" | "tv";
  id: any;
};

export const useOneMovie = ({ type, id }: oneMovieIds) => {
  return useQuery({
    queryKey: ["oneMovie", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
      );
      return response.data;
    },
  });
};
