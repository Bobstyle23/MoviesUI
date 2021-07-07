import Movies from "./components/movies";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import MovieForm from "./components/movieForm";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="container">
        <h1>
          Movies <LocalMoviesIcon />
        </h1>
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notfound" />
        </Switch>

        {/* <Movies /> */}
      </main>
    </div>
  );
}

export default App;
