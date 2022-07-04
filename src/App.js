import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';
import TutorialList from './components/TutorialList';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a hsref="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutotrials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <swith>
          <Route exact path={["/","/tutorials"]} component={TutorialList} />
          <Route path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </swith>
      </div>
    </Router>
  );
}

export default App;
