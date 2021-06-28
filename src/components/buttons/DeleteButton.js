import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const DeleteButton = (props) => {
  const handleDelete = () => {
    movieStore.moviesDelete(props.movie);
  };

  return (
    <button type="button" class="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};
export default observer(DeleteButton);
