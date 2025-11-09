"use client";

import OneMovie from "@/ui/oneMovie/OneMovie";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  return <OneMovie  />;
};

export default page;
