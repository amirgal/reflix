import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Landing extends Component {
    constructor(props){
        super(props)
        this.state={
            users:this.props.users
        }
    }
    render() {
        const users = this.state.users
        return (
        <div className="App users">
            {users.map(u => <Link to="/catalog">
                    <div key={u.name} className="user" style={{"background-color": u.color}}>{u.name}</div>
                </Link>)} 
        </div>
        )
    }
}

export default Landing