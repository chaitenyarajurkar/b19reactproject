import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import CardParent from './Components/Cards/CardParent';
// import Effect from './Components/effect';


function App() {
    const dataToPass = " Hello World";
    const [arrayData,setArratData] = useState([]);
    const addFromChild =(dataRecieveFromChild)=>{
      setArratData(prevState=>[...prevState,dataRecieveFromChild]);
      console.log(dataRecieveFromChild);
    }
    const c = ["dfddreref","dfduudf","ddduf"];
  return(
    <div>
      <Navbar dataToPass={dataToPass} defaultData={"code first"} addFromChild={addFromChild}></Navbar>
      <CardParent></CardParent>
    </div>
  )
}

export default App;
