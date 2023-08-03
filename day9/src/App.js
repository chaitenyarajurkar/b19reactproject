import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [formData,setfromData] = useState({ 
         name:"",
         age:0,
         mobile:"",
         email:"",
         pincode:"",
         address:"",
         gender:"",
         permananentAddress:""
  });

  const [formArray,setFormArray] = useState([]);
  const [checked,setChecked] = useState("");

  const commmonHandler = (fieldName, event) => {
    console.log(fieldName, event.target.value);
    setfromData(prevState => ({
      ...prevState, [fieldName]: event.target.value
    }))

 }

 const submitHandler=(e)=>{
  e.preventDefault();
  console.log(formData);
  setFormArray(prevState=>[...prevState,formData]);
 setfromData({ 
  name:"",
  age:0,
  mobile:"",
  email:"",
  pincode:"",
  address:"",
  gender:"",
  permananentAddress:""
});
   console.log(formArray);
 }

 function handleChange(e) {
  debugger;
  console.log(e.target.value,e.target.checked);
  setChecked(e.target.checked);

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
              <input type="text" value={formData.name} className="form-control" onChange={(e)=>commmonHandler("name",e)} id="exampleFormControlInput1" placeholder="Enter name" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Age:</label>
              <input type="number" value={formData.age} className="form-control"  onChange={(e)=>commmonHandler("age",e)} id="exampleFormControlInput1" placeholder="Enter age" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Mobile</label>
              <input type="text" value={formData.mobile} className="form-control"  onChange={(e)=>commmonHandler("mobile",e)} id="exampleFormControlInput1" placeholder="Enter Mobile No." />
            </div>
            <div className="mb-3">
              <label  className="form-label">Gender</label>
              <select className="form-select" aria-label="Default select example" value={formData.gender} onChange={(e)=>commmonHandler("gender",e)}>
                <option defaultValue={formData.gender}>select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
              <input type="email" value={formData.email} className="form-control"  onChange={(e)=>commmonHandler("email",e)} id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Pincode</label>
              <input type="text" value={formData.pincode} className="form-control"  onChange={(e)=>commmonHandler("pincode",e)} id="exampleFormControlInput1" placeholder="Enter Pincode" />
            </div>
            <div className="mb-3">
              <label className="form-label">Example textarea</label>
              <textarea className="form-control" value={formData.address} onChange={(e)=>commmonHandler("address",e)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Permanat Address </label>
              <textarea className="form-control" value={formData.permananentAddress} onChange={(e)=>commmonHandler("permananentAddress",e)} id="exampleFormControlTextarea1" rows="3"></textarea>
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
