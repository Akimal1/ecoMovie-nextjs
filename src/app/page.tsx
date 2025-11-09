import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/home/banner/Banner";
import Trending from "@/components/pages/trending/Trending";
import Popular from "@/components/pages/popular/Popular";
import TopRated from "@/components/pages/topRated/TopRated";

export default function Home() {
  return (
    <div>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}
