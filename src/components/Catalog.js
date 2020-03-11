import React, {Component} from 'react';
import Movie from './Movie'

class Catalog extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: this.props.movies,
            input: "",
            budget:10
        }
    }

    rentMovie = (id) =>{
        const movie = this.state.movies.find(m => m.id == id)
        if(movie.isRented){
            this.setState({budget:this.state.budget+3})
            this.props.rentMovie(id)
        }else if(this.state.budget >= 3){
            this.setState({budget:this.state.budget-3})
            this.props.rentMovie(id)
        } else {
            alert('not enough funds')
        }
    }

    handleInput(e){
        const input = e.target.value
        this.setState({input})
    }

    render() {
        const relevantMovies = this.state.movies.filter(m => m.title.toLowerCase().includes(this.state.input.toLowerCase()))
        return (
            <div>
                <div className="search-bar">
                    <input type="text" value={this.state.input} onChange={this.handleInput.bind(this)} className="search-input" placeholder="  Search a movie..."/>
                    <span className="budget"><h4>BUDGET: {this.state.budget} $</h4></span>
                    <span className="user-name"><h4>User: Amir</h4></span>
                </div>
                <div className="movie-container">
                    {this.state.movies.map(m => 
                        {if(m.isRented){return <Movie rentMovie={this.rentMovie} key={m.id} movie={m}/>}})}
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