import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Custom components
import Home from './Home'
import Procedures from './Procedures';
import Contact from './Contact';

let hashHistory = Router.hashHistory;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory} basename={process.env.PUBLIC_URL}>
        <nav className="nav-bar">
            <Link to='/'>Home</Link>{' '}
            <Link to='/procedures'>Procedures</Link>{' '}
            <Link to='/contact'>Contact</Link>{' '}
        </nav>
         <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/procedures' component={Procedures} />
              <Route path='/contact' component={Contact} />
          </Switch>
        </div>
        </Router>
      </div>


    );
  }
}
export default App;
