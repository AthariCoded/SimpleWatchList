import "./App.css";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import AddMovie from "./components/AddMovie";

const theme = {
  mainColor: "#3d5a80",
  backgroundColor: "#98c1d9",
  red: "red",
};
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AddMovie />

        <MovieList />
        <WatchedList />
      </ThemeProvider>
    </div>
  );
}

export default App;
