import React, { Component } from "react";
import Likes from "./common/likes";
import Dislike from "./common/dislike";
import Delete from "./common/delete";

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, onLike, onDislike } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>Title</th>
              <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
              <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
              <th onClick={() => this.raiseSort("like")}>Like</th>
              <th onClick={() => this.raiseSort("dislike")}>Dislike</th>
              <th onClick={() => this.raiseSort("delete")}>Delete</th>
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
                    onClick={() => onLike(movie)}
                    className="btn btn-light"
                  >
                    <Likes liked={movie.liked} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDislike(movie)}
                    className="btn btn-light"
                  >
                    <Dislike disliked={movie.disliked} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm m-2"
                  >
                    <Delete deleted={movie.deleted} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;
