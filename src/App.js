import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      
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
          <Route path="/" exact render={() => <Landing />}/>
          <Route path="/catalog" exact render={() => <Catalog items={Object.keys(state)} />} />
        </div>
      </Router>
    );
  }
}

export default App;
