import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Movie extends Component {

    rentMovie(){
        this.props.rentMovie(this.props.movie.id)   
    }


    render() {
        const movie = this.props.movie
        return (
            <div className="movie" style={{'backgroundImage':`url(${movie.img})`}}>
                    <button className="rent-btn" onClick={this.rentMovie.bind(this)}>
                        {movie.isRented? '-' : '+'}
                    </button>
                <Link to={`/movie/${movie.id}`}>
                    <h4 className="movie-title">{movie.title}</h4>
                </Link>
            </div>
        )
    }
}

export default Movie