import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';


const Login = () => {
    const [formData,setFormData] = useState({UserName:"codefirst",UserPassword:""});
    const [errorMessage,setErrormessage] = useState("");
    const [locaerrormsg,setLocaerrormsg] = useState("")
    const [show,setShow] = useState(false)
    const navigate = useNavigate();
    const onChangeHandler = (fieldName,value)=>{
        setFormData(prevState=>({...prevState,[fieldName]:value}));
    }
    const submitHandler=async(e)=>{

         e.preventDefault();
         

         if(formData.UserName !== "" && formData.UserPassword !==""){
            if(formData.UserName === "admin" && formData.UserPassword ==="1234"){
                localStorage.setItem("isAdmin",true);
                navigate("/");
                window.location.reload();
            }else{
                try {
                    const res = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/Login",formData);
                    console.log(res.data);
       
                    if(res.data.data !== null){
                        setErrormessage("");
                        localStorage.setItem("userinfo",JSON.stringify(res.data.data))
                       alert(res.data.message);
                       navigate("/");
                       window.location.reload()
                    }else{
                       setErrormessage(res.data.message);
                       setShow(true)
                    }
       
                   
                } catch (error) {
                   
                }

            }
         
        }else{

            if(formData.UserName === ""){
                setLocaerrormsg("Please enter user name")
            }
            if(formData.UserPassword === ""){
                setLocaerrormsg("Please enter paasword")
            }
        }

    }
    const hideModal = ()=>{
        setShow(false);
    }
    return (
        <div className='bodycss'>
            <Modal title="Login Error" content={errorMessage} show={show} hideModal={hideModal}></Modal>
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
              
              <div className='p-3' style={{color:"white"}}>
                    {locaerrormsg}
              </div>
              
              
              <div className='mt-3 mb-3 p-3'>
              <button type='submit' className='btn btn-primary'>Submit</button>

              </div>
            </form>
           

            </div>
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