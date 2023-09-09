
import React from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Pages/Home';
import Mobile from './Component/Pages/Mobile';
import Headphone from './Component/Pages/HeadPhones';
import DetailsPage from './Component/Pages/Other/DetailsPage'; 
import Login from './Component/Pages/Login/Login';
import Signup from './Component/Pages/Signup/Signup';
function App() {

  return (
   <div className='constainer-fluid'>

  <BrowserRouter>
       <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/headphones' element={<Headphone></Headphone>}></Route>
        <Route path='/detailspage' element={<DetailsPage></DetailsPage>}> </Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
  </BrowserRouter>
  

   </div>
  );
}

export default App;
