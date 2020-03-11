import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Landing extends Component {
    constructor(){
        super()
        this.state={
            users:[
                {name:'Amir',color:'red'},
                {name:'Tomer',color:'red'},
                {name:'Gal',color:'red'},
                {name:'Ben',color:'red'}
            ]
        }
    }
    render() {
        const users = this.state.users
        return (
        <div className="App users">
            <Link to="/catalog">link</Link>
                {users.map(u => <div key={u.name} className="user">{u.name}</div>)} 
            </div>
        )
    }
}

export default Landing