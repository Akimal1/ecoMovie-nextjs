"use client";
import React from "react";
import scss from "./header.module.scss";
import { SiThemoviedatabase } from "react-icons/si";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const header = () => {
  const router = useRouter();
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.headerIcons}>
            <span>
              <SiThemoviedatabase />
            </span>
            <h2 onClick={() => router.push("/")}>EcoMovie</h2>
          </div>
          <div className={scss.headerTitle}>
            <Link href="/movies">Movies</Link>
            <Link href="/tv">TV Shows</Link>
            <p>
              <IoMdSearch />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default header;
