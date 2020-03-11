import React, {Component} from 'react';

class Movie extends Component {

    rentMovie(){
        this.props.rentMovie(this.props.movie.id)        
    }

    render() {
        const movie = this.props.movie
        return (
        <div className="movie" style={{'background-image':`url(${movie.img})`}}>
            <button className="rent-btn" onClick={this.rentMovie.bind(this)}>Rent</button>
            <div className="movie-title">{movie.title}</div>
        </div>
        )
    }
}

export default Movie