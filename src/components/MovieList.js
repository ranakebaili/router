import React, { useState } from 'react';
import MovieCard from './MovieCard';
import '../App.css';


function MovieList({ movies,rating}) {
    //filter by name
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        };

    const filteredMovies = movies.filter((movie) => {
        return movie.title.includes(search) && movie.rate>=rating;
        });

    return (
    <div>
            <input
            type="text"
            placeholder="Search movie"
            value={search}
            onChange={handleSearchChange}
            className='Filter'
            />
        <div className="MovieList">
            {filteredMovies
            .map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
        </div>
    </div>
    );
}

export default MovieList;
