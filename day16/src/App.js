import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import UserModule from './Components/UserModule';
function App() {
    const dataToPass = " Hello World";
    const [arrayData,setArratData] = useState([]);

    const addFromChild =(dataRecieveFromChild)=>{
      setArratData(prevState=>[...prevState,dataRecieveFromChild]);
      console.log(dataRecieveFromChild);
    }
  return(
    <div>
      <Navbar dataToPass={dataToPass} defaultData={"code first"} addFromChild={addFromChild}></Navbar>
       <UserModule arrayData={arrayData}></UserModule>
    </div>
  )
}

export default App;
