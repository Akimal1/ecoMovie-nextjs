"use client";
import { useSearchMovie } from "@/hooks/movies/searchmovie/searchMovie";
import Card from "@/ui/card/Card";
import SearchInput from "@/ui/searchInput/SearchInput";
import React, { useState } from "react";
import scss from "./searchPage.module.scss";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearchMovie(query);

  return (
    <div className={scss.search} style={{ padding: "40px",

     }}>
        <div className={scss.input}>

      <SearchInput onSearch={setQuery} />
      {isLoading && <p>Loading...</p>}
        </div>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap: "20px",
          marginTop: "40px",
          marginBottom:"40px",
          height:"auto"
        }}
      >
        {data?.map((item, idx) => (
          <div style={{
            marginBottom:"25px"
          }} key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title || item.name}
              style={{ borderRadius: "10px", width: "100%" }}
            />
            <h4>
              {(item.title || item.name).length > 15
                ? (item.title || item.name).slice(0, 12) + "..."
                : item.title || item.name}
            </h4>
                <p>{item.release_date}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
