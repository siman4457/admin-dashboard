import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/views/Home'
import Manage_Orders from './components/views/Manage_Orders'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
