import React, { Component } from 'react';
import Card from './Card';
import moment from 'moment';

export default class Weekly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const today = moment().format("YYYY-MM-DD");
        const lastWeek = moment().subtract(7, 'd').format("YYYY-MM-DD");
        const apiKey = "{API_KEY}";
        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=${apiKey}`)
        .then(res => res.json())
        .then(results => this.setState({
            movies: results.results
        }));
    }

    render() {
        return (
            <div>
                <h1>Weekly</h1>
                <div className="d-flex flex-wrap justify-content-around">
                    {this.state.movies.map(movie => (
                        <Card handleClick={() => {}} key={movie.id} film={movie} />
                    ))}
                </div>
            </div>
        )
    }
}
