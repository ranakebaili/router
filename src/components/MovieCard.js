//MovieCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import MovieRating from './Rating';
import { Link } from 'react-router-dom';

function Movie({ title, rate, 
    posterUrl }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${title}`}>
        <Card className="Card" style={{ width: "330px" }}>
          <Card.Body>
            <img className="Img" src={posterUrl} alt={title} />
            <Card.Title className="Title">{title}</Card.Title>
            <MovieRating MovieRating={rate} isMovieRating={true} />
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Movie;
