import Movies from "./components/movies";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";

function App() {
  return (
    <div className="App">
      <main className="container">
        <h1>
          Movies <LocalMoviesIcon />
        </h1>
        <Movies />
      </main>
    </div>
  );
}

export default App;
