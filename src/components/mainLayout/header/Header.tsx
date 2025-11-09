"use client";
import React, { useEffect, useState } from "react";
import scss from "./header.module.scss";
import { SiThemoviedatabase } from "react-icons/si";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const header = () => {
  const router = useRouter();

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${scss.container} ${hidden ? scss.hide : ""}`}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.headerIcons}>
            <img
              src="https://movie.elcho.dev/assets/eco-movie-logo-a8_bjuTM.svg"
              alt=""
            />
            <h2 onClick={() => router.push("/")}>EcoMovie</h2>
          </div>
          <div className={scss.headerTitle}>
            <Link href="/movies">Movies</Link>
            <Link href="/tv">TV Shows</Link>
            <p onClick={()=> router.push("/search")}>
              <IoMdSearch />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
