import React, { useState, useEffect } from 'react'
import Card from './Card';

export default function Favorites() {
    const [movies, setMovies] = useState([]);
    const [favIDs, setFavIDs] = useState(getStorage());
    const [loading, setLoading] = useState(false);
    
    /*constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favIDs: this.getStorage(),
            //loading: true
        }
    }*/

    /*componentDidMount() {
        this.state.favIDs.forEach(id => {
            this.getMovie(id);
        });
    }*/

    useEffect(() => {
        favIDs.forEach(id => {
            getMovie(id);
        });
    }, []);

    /*getStorage = () => {
        return JSON.parse(localStorage.getItem("favorites"));
    }*/

    function getStorage () {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    }

    function getMovie (id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8c2c5c205a0ac5bb229fe92084e87cf4`)
        .then(res => res.json())
        .then(movie => {
            /*const films = this.state.movies;
            films.push(movie);
            this.setState({
                movies: films
            })*/
            setMovies([...movies, movie]);
            /*this.setState({
                movies: [...this.state.movies, movie]
            });*/
        });
    }

    return (
        <div>
            <h1>Favorites</h1>
            <div className="d-flex flex-wrap justify-content-around">
                {loading ? (
                    <div className="spinner-border text-primary" role="status" />
                ) : (
                    <>
                        {movies.map(movie => (
                            <Card handleClick={() => {}} key={movie.id} film={movie} />
                        ))}
                    </>
                )}
                
            </div>
        </div>
    );
}
