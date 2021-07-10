import Movies from "./components/movies";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import MovieForm from "./components/movieForm";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Register from "./components/registerForm";

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
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/registerForm" component={Register} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
