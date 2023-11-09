import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const { description, trailer } = movie;

  return (
    <div>
      <h1 className='dettitle'>{title}</h1>
      <p className='dettext'>{description}</p>
      <iframe
        width="560"
        height="315"
        src={trailer}
        title="YouTube Video"
        className='trailer'
      ></iframe>
    </div>
  );
};

export default MovieDetails;
