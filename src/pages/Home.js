import React, { useState } from 'react'; 
import { Data } from '../components/Data';
import '../App.css';
import MovieList from '../components/MovieList';
import AddMovie from '../components/AddMovie';
import FilterByRate from '../components/Rating';

const Home = () => {
  const [movies, setMovies] = useState(Data); 
  const [rating, setRating] = useState(1);
  
  const addMovie = (newMovie) => {
    console.log(newMovie);
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1 className='websiteTitle'>Movies</h1>
      <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/>
      <MovieList movies={movies} rating={rating}/> 
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default Home;
