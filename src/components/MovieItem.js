import { MovieWrapper } from "../styles";
import MovieButton from "./buttons/MovieButton";
import DeleteButton from "./buttons/DeleteButton";

const MovieItem = (props) => {
  return (
    <div>
      <MovieWrapper>
        <img src={props.movie.poster} alt={props.movie.title} />
        <p>{props.movie.title}</p>
        <MovieButton movie={props.movie}></MovieButton>
        <DeleteButton movie={props.movie}></DeleteButton>
      </MovieWrapper>
    </div>
  );
};
export default MovieItem;
