import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Custom components
import Home from './Home'
import Procedures from './Procedures';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <nav className="nav-bar">
         <Link to="/my-dentist-website/">Home</Link>{' '}
         <Link to="/my-dentist-website/procedures">Procedures</Link>{' '}
         <Link to="/my-dentist-website/contact">Contact</Link>{' '}
        </nav>
         <div>
          <Route exact path="/my-dentist-website/" component={Home} />
          <Route path="/my-dentist-website/procedures" component={Procedures} />
          <Route path="/my-dentist-website/contact" component={Contact} />
        </div>
        </Router>
      </div>


    );
  }
}
export default App;
