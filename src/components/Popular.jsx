import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Popular () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}")
        .then(res => res.json())
        .then(results => setMovies(results.results));
    }, []);

    /*componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}")
        .then(res => res.json())
        .then(results => this.setState({
            movies: results.results
        }));
    }*/

    return (
        <div>
            <h1>Popular</h1>
            <div className="d-flex flex-wrap justify-content-around">
                {movies.map(movie => (
                    <Card handleClick={() => {}} key={movie.id} film={movie} />
                ))}
            </div>
        </div>
    )
}
