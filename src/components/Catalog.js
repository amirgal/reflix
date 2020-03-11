import React, {Component} from 'react';
import Movie from './Movie'

class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            // user:this.props.user
        }
    }

    rentMovie = (id) => {
        const userId = this.props.user.id
        this.props.rentMovie(id,userId)
    }

    handleInput(e){
        const input = e.target.value
        this.setState({input})
    }

    render() {
        const movies = this.props.movies
        const user = this.props.user
        const relevantMovies = movies.filter(m => m.title.toLowerCase().includes(this.state.input.toLowerCase()))
        return (
            <div>
                <div className="search-bar">
                    <input type="text" value={this.state.input} onChange={this.handleInput.bind(this)} className="search-input" placeholder="  Search a movie..."/>
                    <span className="budget"><h4>BUDGET: {user.budget} $</h4></span>
                    <span className="user-name"><h4>User: {user.name}</h4></span>
                </div>
                <div className="movie-container">
                    {movies.map(m => 
                        {if(user.rented[m.id]){return <Movie rentMovie={this.rentMovie} key={m.id} movie={m}/>}})}
                </div>
                <h4>Catalog</h4><hr/>
                <div className="movie-container">
                    {relevantMovies.map(m => <Movie rentMovie={this.rentMovie} key={m.id} movie={m}/>)}
                </div>
            </div>
        )
    }
}

export default Catalog