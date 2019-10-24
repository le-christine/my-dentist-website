import React, { Component } from 'react';
import './App.css';

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Custom components
import Home from './Home'
import Procedures from './Procedures';
import Contact from './Contact';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history} basename={process.env.PUBLIC_URL}>
        <nav className="nav-bar">
         <Link to="/">Home</Link>{' '}
         <Link to="/procedures">Procedures</Link>{' '}
         <Link to="/contact">Contact</Link>{' '}
        </nav>
         <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        </Router>
      </div>


    );
  }
}
export default App;
