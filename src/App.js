import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import Header from './components/header/Header';
import Form from './components/form/Form';
import Palette from './components/palette/Palette';

function App() {
  return (
    <div className="app">
      <div className="form-wrap">
       
      
      <BrowserRouter>
      <Header />
       <Route path="/form" component={Form}/>
       <Route path="/palette" component={Palette}/>

      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
