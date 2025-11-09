import Card from "@/ui/card/Card";
import scss from "./recomendations.module.scss";

interface recomendProps {
  title: string;
  data: any[];
  isRecomen?: boolean;
  isTrailer?: boolean;
}

export default function OneMovieRecomendations({
  title,
  data,
  isRecomen,
}: recomendProps) {
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.main}>
            <h4>{title}</h4>
            <div className={scss.list}>
              {isRecomen &&
                data?.map((item, idx) => (
                  <Card movie={item} key={idx} selected={"movie"} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
