import React, { Component } from "react";
import Likes from "./common/likes";
import Dislike from "./common/dislike";
import Delete from "./common/delete";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      path: "like",
      label: "Like",
      content: (movie) => (
        <button
          onClick={() => this.props.onLike(movie)}
          className="btn btn-light"
        >
          <Likes liked={movie.liked} />
        </button>
      ),
    },
    {
      key: "dislike",
      path: "dislike",
      label: "Dislike",
      content: (movie) => (
        <button
          onClick={() => this.props.onDislike(movie)}
          className="btn btn-light"
        >
          <Dislike disliked={movie.disliked} />
        </button>
      ),
    },
    {
      key: "delete",
      path: "delete",
      label: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm m-2"
        >
          <Delete deleted={movie.deleted} />
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <div>
        <Table
          data={movies}
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default MoviesTable;
