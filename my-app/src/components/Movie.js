import React, { Component } from 'react'

class Movie extends Component {
    render() {
        const {data} = this.props;
        const Movie = data.map(movie => {
            return (
                <li key = {movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.desc}</p>
                    <img src = {movie.img}/>
                </li>                  
            )   
        })
        return (
            <ul>
                {Movie}
            </ul>
        )
    }
}

export default Movie;