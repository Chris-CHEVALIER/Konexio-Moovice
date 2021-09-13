import React, { Component } from 'react';
import Card from './Card';

export default class PopularBattle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: JSON.parse(localStorage.getItem("favorites")) || [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}")
        .then(res => res.json())
        .then(results => this.setState({
            movies: results.results,
            loading: false
        }));
    }

    handleBattle = (id) => {
        this.setState({
            currentBattle: this.state.currentBattle + 2,
            favorites: [...this.state.favorites, id]
        });
        localStorage.setItem("favorites", JSON.stringify([...this.state.favorites, id]))
    }

    render() {
        const { loading, movies, currentBattle } = this.state;
        return (
            <div>
                <h1>Popular Battle</h1>
                {loading && (
                    <div className="spinner-border text-primary" role="status"/>
                )}
                {movies.length > 0 && currentBattle < movies.length - 1 && (
                    <div className="d-flex justify-content-evenly flex-wrap">
                        <Card handleClick={this.handleBattle} film={movies[currentBattle]} />
                        <Card handleClick={this.handleBattle} film={movies[currentBattle + 1]} />
                    </div>
                )}
                {currentBattle >= movies.length - 1 && (
                    <h3>Vous avez parcouru tous les films.</h3>
                )}
            </div>
        )
    }
}
