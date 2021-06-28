import movieStore from "./stores/movieStore";
import { Wrapper } from "../styles";
import { useState } from "react";

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    id: "",
    watched: false,
    title: "",
    poster: "",
  });
  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.title]: event.target.value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    movieStore.moviesAdd(newMovie);
  };
  return (
    <Wrapper>
      <form onSubmit={handleAdd}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter a movie..."
            onChange={handleChange}
            title="title"
            aria-label="movie name"
            aria-describedby="button-addon2"
          />

          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add+
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddMovie;
