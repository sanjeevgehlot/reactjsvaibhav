import React from "react";

import Login from './Login';
import Index from './Indexx';
import Header from './Header';
import Dashboard10 from './Dashboard10';
import Dashboard12 from './Dashboard12';

import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
      

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        
          <Route path="/login">
            <React.Fragment>
      
    
            <div className="centered">
              <Login/>
            </div>
        
            </React.Fragment>
          </Route>


          <Route path="/index">
            <React.Fragment>
      
    
              <Header/>
              <Index/>
            
            </React.Fragment>
          </Route>


          <Route path="/dashboard10">
            <React.Fragment>
      
    
              <Header/>
              <Dashboard10/>
            
            </React.Fragment>
          </Route>

          <Route path="/dashboard12">
            <React.Fragment>
      
    
              <Header/>
              <Dashboard12/>
            
            </React.Fragment>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

