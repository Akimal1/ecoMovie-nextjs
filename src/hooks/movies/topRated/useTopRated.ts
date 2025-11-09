"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetResponse } from "../moviestypes";
import { API_KEY } from "@/constants/Api";

type MovieTv = "movie" | "tv";

export const useTopRated = (toggleMovie: MovieTv = "movie") =>
  useQuery({
    queryKey: ["top rated"],
    queryFn: async () => {
      const response = await axios.get<IGetResponse>(
        `https://api.themoviedb.org/3/${toggleMovie}/top_rated?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
  