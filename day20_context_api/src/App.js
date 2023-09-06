import './App.css';
import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import Accodian from './Components/Accodian';

//context api
 
// createContext
//provider
//usecontext

const AppContext = createContext();
function App() {
    const [name,setName] = useState("Helo context");
    const upDateName =(param)=>{
      setName("code First",param);
    }
    console.log("app.js")
  return(
    <div>
      <AppContext.Provider value={{name,upDateName}}>
      <Navbar ></Navbar>
      {/* <Post></Post> */}
      <Accodian></Accodian>
      </AppContext.Provider>
    </div>
  )
}

export default App;
export {AppContext};
