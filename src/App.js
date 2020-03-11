import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
        users:[
          {name:'Amir',color:'red'},
          {name:'Tomer',color:'green'},
          {name:'Gal',color:'magenta'},
          {name:'Ben',color:'maroon'}
      ]
    }
  }
  render() {
    const state = this.state
    return ( 
      <Router>
        <div className="container" /*App will center*/>
          <div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <span className="logo">Reflix</span>
          </div>
          <Route path="/" exact render={() => <Landing users={this.state.users}/>}/>
          <Route path="/catalog" exact render={() => <Catalog items={Object.keys(state)} />} />
        </div>
      </Router>
    );
  }
}

export default App;
