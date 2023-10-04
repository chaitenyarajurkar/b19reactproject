import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">ECCCOM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbarData?.length > 0 && navbarData.map((item)=>{
              if(item.categoryName !== 'string'){
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
                  <Link className="nav-link active" aria-current="page" to='/addproduct'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{contewxt.count}</Link>
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