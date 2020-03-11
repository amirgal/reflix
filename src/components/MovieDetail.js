import React, {Component} from 'react';

class MovieDetail extends Component {

    render() {
        const movie = this.props.movie    
        return (
            <div className="App movie-details">
                <h3 className="movie-details-title">{`${movie.title} released: ${movie.year}`}</h3>
                <img src={movie.img} alt=""/>
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail