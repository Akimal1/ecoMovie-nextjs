import { API_KEY } from "@/constants/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type MovieIDS = { type: "movie" | "tv"; id: any };

export const useOfficialVideos = ({ type, id }: MovieIDS) => {
  return useQuery({
    queryKey: ["officialVideos", type, id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`
      );

      const results = response.data.results;

      // 🔍 фильтрация по официальным трейлерам
      return results.filter(
        (video: any) =>
          video.site === "YouTube" &&
          (video.type === "Trailer" ||
            video.name.toLowerCase().includes("official"))
      );
    },
    enabled: !!id, // ✅ чтобы запрос не шёл, пока id undefined
  });
};
