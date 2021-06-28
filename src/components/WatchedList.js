import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { ListWrapper, Title } from "../styles";
import { useState } from "react";
import { observer } from "mobx-react";
import movieStore from "./stores/movieStore";

const WatchedList = () => {
  const [query, setQuery] = useState("");

  const watchedList = movieStore.movies
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .filter((movie) => movie.watched === true)

    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);

  return (
    <div>
      <Title>
        Watched Movies:
        {!query
          ? watchedList.length
          : " showing " +
            watchedList.length +
            " out of " +
            movieStore.movies.filter((movie) => movie.watched === true).length}
      </Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{watchedList}</ListWrapper>
    </div>
  );
};
export default observer(WatchedList);
