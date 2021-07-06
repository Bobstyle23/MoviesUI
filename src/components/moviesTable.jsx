import React from "react";
import Likes from "./common/likes";
import Dislike from "./common/dislike";
import Delete from "./common/delete";

function MoviesTable(props) {
  const { movies, onDelete, onLike, onDislike, onSort } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort("title")}>Title</th>
            <th onClick={() => onSort("genre.name")}>Genre</th>
            <th onClick={() => onSort("numberInStock")}>Stock</th>
            <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
            <th onClick={() => onSort("like")}>Like</th>
            <th onClick={() => onSort("dislike")}>Dislike</th>
            <th onClick={() => onSort("delete")}>Delete</th>
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
                <button onClick={() => onLike(movie)} className="btn btn-light">
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

export default MoviesTable;
