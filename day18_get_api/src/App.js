import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Post from './Components/Post';

// Api's ==> Application programming interface
function App() {
    
  return(
    <div>
      <Navbar ></Navbar>
      <Post></Post>
    </div>
  )
}

export default App;
