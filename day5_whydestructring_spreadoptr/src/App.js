
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Feature from './Components/Features/Feature';
import Pricing from './Components/Pricing/Pricing';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  
  return (
    <>
   <BrowserRouter>
   <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/feature' element={<Feature></Feature>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
      </Routes>
   </BrowserRouter>

    </>

  );
}

export default App;
