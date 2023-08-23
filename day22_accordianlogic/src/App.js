import './App.css';
import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import Accodian from './Components/Accodian';


const AppContext = createContext();
function App() {
    const [name,setName] = useState("Helo context");
    const upDateName =()=>{
      setName("code First");
    }
    console.log("app.js")
  return(
    <div>
      <AppContext.Provider value={{name,upDateName}}>
      <Navbar ></Navbar>
      <Accodian></Accodian>
      {/* <Post></Post> */}
      </AppContext.Provider>
    </div>
  )
}

export default App;
export {AppContext};
