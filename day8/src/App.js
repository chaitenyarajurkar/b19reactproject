import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [name,setName] = useState("code frist");
  const [age,setAge] = useState(0);
  const [mobile,setMobile]= useState("");
  const [email,setEmail] =  useState("");
  const [pincode,setPincode]= useState("");
  const [address,setAddress]= useState("");
  const [gender , setGender] = useState("male");

 const commmonHandler =(param ,event)=>{
     if(param==="name"){
      setName(event.target.value);
     }
     if(param === "age"){
      setAge(event.target.value)
     }
     if(param === "email"){
      setEmail(event.target.value);
     }
     if(param === "mobile"){
      setMobile(event.target.value);
     }
     if(param === "address"){
      setAddress(event.target.value);
     }
     if(param === "pincode"){
      setPincode(event.target.value);
     }
     if(param === "gender"){
      console.log(event.target.value);
      setGender(event.target.value);
     }
 }

 const submitHandler=(e)=>{
  e.preventDefault();
  console.log("name",name);
  console.log("email",email);
  console.log("age",age);
  console.log("address",address);
  console.log("pincode",pincode);
  console.log("mobile",mobile);
  setName("");
  setAge("");
  setMobile("");
  setEmail("");
  setPincode("");
  setAddress("");
  setGender("");

 }
  return (
    <>
      <div className='container'>
        <div className='row '>

          <div className='offset-4 col-4 border border-primary p-3 shadow p-3 mb-5 bg-white rounded'>
            <div className="alert alert-primary text-center" role="alert">
              Person Detail Form
            </div>
            <form onSubmit={(e)=>submitHandler(e)}>
            <div className="mb-3">
              <label  className="form-label">Name</label>
              <input type="text" value={name} className="form-control" onChange={(e)=>commmonHandler("name",e)} id="exampleFormControlInput1" placeholder="Enter name" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Age:</label>
              <input type="number" value={age} className="form-control"  onChange={(e)=>commmonHandler("age",e)} id="exampleFormControlInput1" placeholder="Enter age" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Mobile</label>
              <input type="text" value={mobile} className="form-control"  onChange={(e)=>commmonHandler("mobile",e)} id="exampleFormControlInput1" placeholder="Enter Mobile No." />
            </div>
            <div className="mb-3">
              <label  className="form-label">Gender</label>
              <select className="form-select" aria-label="Default select example" value={gender} onChange={(e)=>commmonHandler("gender",e)}>
                <option defaultValue={gender}>select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
              <input type="email" value={email} className="form-control"  onChange={(e)=>commmonHandler("email",e)} id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Pincode</label>
              <input type="text" value={pincode} className="form-control"  onChange={(e)=>commmonHandler("pincode",e)} id="exampleFormControlInput1" placeholder="Enter Pincode" />
            </div>
            <div className="mb-3">
              <label className="form-label">Example textarea</label>
              <textarea className="form-control" value={address} onChange={(e)=>commmonHandler("address",e)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Submit Form</button>
            </div>
            </form>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
