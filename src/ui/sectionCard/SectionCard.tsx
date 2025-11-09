import { Navigation } from "swiper/modules";
import Card from "../card/Card";
import scss from "./sectionCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

interface SectionCardProps {
  title: string;
  toggle: string;
  isLoading: boolean;
  data: any;
}

export default function SectionCard({
  title,
  toggle,
  data,
  isLoading,
}: SectionCardProps) {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.top}>
            <h3>{title}</h3>
            <div className={scss.btn}>
              <button>{toggle}</button>
            </div>
          </div>
          <div className={scss.list}>
            <button className={`btn-prev ${scss.btn_prev}`}>
              <FaArrowCircleLeft />
            </button>
            <button className={`btn-next ${scss.btn_next}`}>
              <FaArrowCircleRight />
            </button>
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                spaceBetween={5}
                slidesPerView={5}
                slidesPerGroup={5}
              >
                {data?.map((item, idx) => (
                  <SwiperSlide>
                    <Card selected={"movie"} key={idx} movie={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
