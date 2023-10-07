
import React from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Mobile from './Component/Pages/Mobile';
import Headphone from './Component/Pages/HeadPhones';
import DetailsPage from './Component/Pages/Other/DetailsPage'; 
import Login from './Component/Pages/Login/Login';
import Signup from './Component/Pages/Signup/Signup';
import Addproduct from './Component/Pages/Addproduct/Addproduct';
import Nopage from './Component/Pages/Other/Nopage';
import { createContext, useState } from 'react';
import Camera from './Component/Pages/Camera';
import Laptop from './Component/Pages/Laptop';
import Tablet from './Component/Pages/Tablet';

const AppContext = createContext();
function App() {
const [cartcount,setCartcount] = useState(0);

const getUpdateCartount =(count)=>{
  setCartcount(count);
} 
  return (
   <div className='constainer-fluid'>

<AppContext.Provider value={{count:cartcount,getUpdateCartount:getUpdateCartount}}>
  <BrowserRouter>
       <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home name="React code"></Home>}></Route>
        <Route path='/mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/camera' element={<Camera></Camera>}></Route>
        <Route path='/laptop' element={<Laptop></Laptop>}></Route>
        <Route path='/tablet' element={<Tablet></Tablet>}></Route>
        <Route path='/headphones' element={<Headphone></Headphone>}></Route>
        <Route path='/detailspage/:userId?/:id' element={<DetailsPage></DetailsPage>}> </Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
        <Route path='*' element={<Nopage></Nopage>}></Route>
     </Routes>
  </BrowserRouter>
  
  </AppContext.Provider>
   </div>
  );
}

export default App;
export {AppContext};