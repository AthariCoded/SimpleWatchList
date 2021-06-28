// import movies from "../movies";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const MovieButton = (props) => {
  const handleUpdate = () => {
    movieStore.updateWatch(props.movie);
  };

  return (
    <button type="button" class="btn btn-dark" onClick={handleUpdate}>
      {props.movie.watched ? "Unwatch" : "Watched"}
    </button>
  );
};
export default observer(MovieButton);
