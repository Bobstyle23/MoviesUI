import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieIcon from "@material-ui/icons/Movie";
import Likes from "./common/likes";
import Dislike from "./common/dislike";
import Pagination from "./common/pagination";
import Delete from "./common/delete";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 3,
    currentPage: 1,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDislike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].disliked = !movies[index].disliked;
    this.setState({ movies });
  };

  handleOnPageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (count === 0)
      return (
        <p>
          There are no <MovieIcon /> movies in the database!
        </p>
      );
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>
          Showing {count} <MovieIcon /> movies in the database!
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like</th>
              <th>Dislike</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleLike(movie)}
                    className="btn btn-light"
                  >
                    <Likes liked={movie.liked} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDislike(movie)}
                    className="btn btn-light"
                  >
                    <Dislike disliked={movie.disliked} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm m-2"
                  >
                    <Delete deleted={movie.deleted} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handleOnPageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
