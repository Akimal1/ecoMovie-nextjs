import { API_KEY } from "@/constants/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useSearchMovie = (query: string) => {
  return useQuery({
    queryKey: ["searchMovie", query],
    queryFn: async () => {
      if (!query.trim()) return [];
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi`,
        {
          params: {
            api_key: API_KEY,
            query,
          },
        }
      );
      return response.data.results;
    },
    enabled: !!query,
  });
};
