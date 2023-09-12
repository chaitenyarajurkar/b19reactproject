import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Navbar = () => {

  const [navbarData, setNavbarData] = useState([]);
  const [flag,setFlag] = useState(false);
  console.log("navbar")
  useEffect(() => {
    const userDetail = localStorage.getItem("userinfo");
    console.log(userDetail);
    if(userDetail !== null){
      setFlag(true);
    }
    const getApiCall = async () => {
      try {
        const response = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory");
        console.log(response?.data?.data);
        setNavbarData(response?.data?.data);
        
      } catch (error) {
           console.log(error);
      }
     
    }
    getApiCall();
  }, [])

  // useEffect(()=>{
  //   console.log("hello guys")

  // })
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
                  <li className="nav-item active">
                  <Link className="nav-link active" aria-current="page" to={item.categoryName.toLowerCase()}>{item.categoryName}</Link>
                  </li>
                )
              }
            })}
           
            
          </ul>
        </div>
       <div class="form-inline">

       {!flag && <><button class="btn btn-outline-success me-2" type="button"><Link to="/login">Login</Link></button>{""}
          <button class="btn btn-outline-success me-2 " type="button"> <Link to="/signup">Sign up</Link></button>
          </>
          }
          {flag && <><button class="btn btn-outline-success me-2" type="button" onClick={()=>onLogout()}>Logout</button>{""}</>}
        </div>

        

      </nav>
    </div>
  );
};

export default Navbar;