import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [name,setName] = useState("code first");
  const [age,setAge] = useState(0);
  const [mobile,setMobile]= useState("");
  const [email,setEmail] =  useState("");
  const [pincode,setPincode]= useState("");
  const [address,setAddress]= useState("");

  const updateName=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)
  }
  const updateage=(event)=>{
    console.log(event.target.value)
    setAge(event.target.value)
  }
  const updatemobile=(event)=>{
    console.log(event.target.value)
    setMobile(event.target.value)
  }
  const updateemail=(event)=>{
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  const updatePincode=(event)=>{
    console.log(event.target.value)
    setPincode(event.target.value)
  }
  const updateAddress=(event)=>{
    console.log(event.target.value)
    setAddress(event.target.value)
  }
  const getGender=(event)=>{
    console.log(event.target.value)
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

 }
  return (
    <>
      <div className='container'>
        <div className='row'>

          <div className='offset-4 col-4 '>
            <div className="alert alert-primary text-center" role="alert">
              Person Detail Form
            </div>
            <form onSubmit={(e)=>submitHandler(e)}>
            <div className="mb-3">
              <label  className="form-label">Name</label>
              <input type="text" value={name} className="form-control" onChange={(e)=>updateName(e)} id="exampleFormControlInput1" placeholder="Enter name" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Age:</label>
              <input type="number" value={age} className="form-control"  onChange={(e)=>updateage(e)} id="exampleFormControlInput1" placeholder="Enter age" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Mobile</label>
              <input type="text" value={mobile} className="form-control"  onChange={(e)=>updatemobile(e)} id="exampleFormControlInput1" placeholder="Enter Mobile No." />
            </div>
            <div className="mb-3">
              <label  className="form-label">Gender</label>
              <select class="form-select" aria-label="Default select example" onChange={(e)=>getGender(e)}>
                <option selected>select gender</option>
                <option value="1">Male</option>
                <option value="2">Femal</option>
              </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
              <input type="email" value={email} className="form-control"  onChange={(e)=>updateemail(e)} id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Pincode</label>
              <input type="text" value={pincode} className="form-control"  onChange={(e)=>updatePincode(e)} id="exampleFormControlInput1" placeholder="Enter Pincode" />
            </div>
            <div className="mb-3">
              <label className="form-label">Example textarea</label>
              <textarea className="form-control" value={address} onChange={(e)=>updateAddress(e)} id="exampleFormControlTextarea1" rows="3"></textarea>
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
