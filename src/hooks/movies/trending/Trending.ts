import { API_KEY } from "@/constants/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetResponse } from "../moviestypes";

type ToggleTrend = "day" | "week";

export const useGetTrending = (toggle: ToggleTrend = "day") => {
  return useQuery({
    queryKey: ["trending",],
    queryFn: async () => {
      const response = await axios.get<IGetResponse>(
        `https://api.themoviedb.org/3/trending/movie/${toggle}?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
};
