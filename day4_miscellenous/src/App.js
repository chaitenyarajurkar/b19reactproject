
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';

function App() {
  let elemt = <h1>Hello this is from variable</h1>;

  const showHtml =()=>{
    return(
      <>
      <h1> This is a function whic return html </h1>
      </>
    )
  }
  return (
    <>
    <Navbar />
   <h1 className='text-center'> Hey React ...!!!</h1> 
     {elemt}
     {showHtml()}
    </>

  );
}

export default App;
