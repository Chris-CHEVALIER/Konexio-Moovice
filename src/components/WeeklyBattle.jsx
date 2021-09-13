import React, { Component } from 'react';
import Card from './Card';
import moment from 'moment';
export default class WeeklyBattle extends Component {
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
        const today = moment().format("YYYY-MM-DD");
        const lastWeek = moment().subtract(7, 'd').format("YYYY-MM-DD");
        const apiKey = "{API_KEY}";
        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=${apiKey}`)
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
                <h1>Weekly Battle</h1>
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
