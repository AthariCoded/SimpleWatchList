import { SearchBarStyled, Wrapper } from "../styles";

const SearchBar = (props) => {
  return (
    <Wrapper>
      <SearchBarStyled
        placeholder="Search for a movie "
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </Wrapper>
  );
};

export default SearchBar;
