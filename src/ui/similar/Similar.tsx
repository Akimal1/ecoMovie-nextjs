import Card from "../card/Card";
import scss from "./similar.module.scss";
interface similarProps {
  title: string;
  data: any[];
  isSimilar?: boolean;
  isTrailer?: boolean;
}

export default function OneMovieSimilar({
  title,
  data,
  isSimilar,
}: similarProps) {
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.main}>
            <h4>{title}</h4>
            <div className={scss.list}>
              {isSimilar &&
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
