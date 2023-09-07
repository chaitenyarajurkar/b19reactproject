import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
const Login = () => {
    const [formData,setFormData] = useState({UserName:"",UserPassword:""});
    const onChangeHandler = (fieldName,value)=>{
        setFormData(prevState=>({...prevState,[fieldName]:value}));
    }
    const submitHandler=async(e)=>{
         e.preventDefault();
       const res = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/Login",formData);
       console.log(res);
    }
    return (
        <div className='wrapping'>
            <div className='decorate'>
            <h3 className='text-center p-3'>
                Login Form
            </h3>
            <form onSubmit={(e)=>submitHandler(e)}>
            <div className='form-group p-3'>
                  <label className='form-label mb-2'>Username</label>
                  <input type='text' value={formData.UserName} onChange={(e)=>onChangeHandler("UserName",e.target.value)} className='form-control mb-2' placeholder='username'></input>
              </div>
              <div className='form-group p-3'>
                  <label className='form-label mb-2'>Password</label>
                  <input type='password' value={formData.UserPassword} onChange={(e)=>onChangeHandler("UserPassword",e.target.value)} className='form-control mb-2' placeholder='password'></input>
              </div>
              <div className='mt-3 mb-3 p-3'>
              <button type='submit' className='btn btn-primary'>Submit</button>

              </div>
            </form>
           

            </div>
        </div>
    );
};

export default Login;


// {
//     "custId": 1,
//     "name": "Nikhil",
//     "mobileNo": "8290202982",
//     "password": "1234"
//   },