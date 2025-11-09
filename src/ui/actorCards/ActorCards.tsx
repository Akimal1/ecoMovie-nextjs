import scss from "./actorCard.module.scss";

interface ActorProps {
  actor: Actor;
}
interface Actor {
  gender: number;
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export default function ActorCard({ actor }: ActorProps) {
  return (
    <div className={scss.card}>
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/original${actor?.profile_path}`
            : "https://www.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-203739001.jpg"
        }
        alt=""
      />
      <div className={scss.title}>
        <h4>{actor.name}</h4>
        <p>{actor.character}</p>
      </div>
    </div>
  );
}
