"use client";
import React, { useState } from "react";
import scss from "./searchInput.module.scss";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (onSearch && value.trim()) onSearch(value.trim());
    router.push("/search");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className={scss.main}>
      <input
        type="text"
        placeholder="Search for a movie or TV show..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
