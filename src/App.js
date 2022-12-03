import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AddBlog from './components/pages/AddBlog';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/About' exact component={About} />
      <Route path='/AddBlog' exact component={ AddBlog } /> 
    </Switch>
    </Router>
    </>
  );
}

export default App;
