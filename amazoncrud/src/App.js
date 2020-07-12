import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Backoffice from './component/backOffice'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Carousel from './component/carousel'
function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    < Carousel />
    <Route path= "/" exact component={Home} />
    <Route path= "/backOffice/" exact component={Backoffice} />
    </Router>
    </>
  );
}

export default App;
