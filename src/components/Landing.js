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
        <div className="users">
            {users.map(u => <Link to={`/catalog/${u.id}`} key={u.name}>
                    <div key={u.name} className="user" style={{"backgroundColor": u.color}}><p>{u.name}</p></div>
                </Link>)} 
        </div>
        )
    }
}

export default Landing