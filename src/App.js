//App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; 
import { Data } from './components/Data';


function App() {
  const [movies, setMovies] = useState(Data); 

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
        <nav className='home'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route
            path="/movies/:title"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      
    </Router>
  );
}

export default App;
