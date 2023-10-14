import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import axios from '../Axios/axiosInterceptor';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../App';

const Navbar = () => {
  const contewxt= useContext(AppContext)
  console.log(contewxt)
  const [navbarData, setNavbarData] = useState([]);
  const [flag,setFlag] = useState(false);
  const [isadmin,setIsadmin] = useState(false);
  
  useEffect(() => {
    const userDetail = localStorage.getItem("userinfo");
    const admin = localStorage.getItem("isAdmin");
    if(userDetail !== null){
      setFlag(true);
    }
    if(admin !== null){
      setIsadmin(true);
    }
    const getApiCall = async () => {
      try {
        const response = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory");
        
        setNavbarData(response?.data?.data);
        
      } catch (error) {
           console.log(error);
      }
     
    }
    getApiCall();
  }, [])

  const onLogout =()=>{
    localStorage.clear();
    window.location.reload();
  }

  const loginJwt=async()=>{
    const reqBody ={
      "email": "nilson@email.com",
      "password":"nilson"
    }
    try {
         const result = await axios.post("http://localhost:8000/auth/login",reqBody);
         console.log(result);
         localStorage.setItem("access_token",result.data.access_token);
    } catch (error) {
      
    }
  }

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">ECCCOM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbarData?.length > 0 && navbarData.map((item,index)=>{
              if(item.categoryName !== 'string' && index <=6){
                return (
                  <li key={item.categoryName} className="nav-item active">
                  <Link className="nav-link active" aria-current="page" to={item.categoryName.toLowerCase()}>{item.categoryName}</Link>
                  </li>
                )
              }
            })}
            
               {isadmin &&<li key="productadd" className="nav-item active">
                  <Link className="nav-link active" aria-current="page" to='/addproduct'>Add Product</Link>
                  </li>}

                <li key="productadd" className="nav-item active">
                  <Link className="nav-link active" aria-current="page" to='/addproduct'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon><sup>{contewxt.count}</sup></Link>
                  </li>

                  <li key="productadd" className="nav-item active">
                    <button className='nav-link active btn btn-danger' onClick={()=>loginJwt()}>Loginviajwt</button>
                  </li>
            
          </ul>
        </div>
       <div className="form-inline">

       {(!flag && !isadmin) && <><Link to="/login"><button className="btn btn-outline-success me-2" type="button">Login</button></Link>{""}
       <Link to="/signup"><button className="btn btn-outline-success me-2 " type="button"> Sign up</button></Link>
          </>
          }
          {(flag || isadmin) &&   <><button className="btn btn-outline-success me-2" type="button" onClick={()=>onLogout()}>Logout</button>{""}</>}
        </div>


        

      </nav>

  
    </div>
  );
};

export default Navbar;