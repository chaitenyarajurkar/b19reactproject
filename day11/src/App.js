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

  const [formInfoArray,setFormInfoArray] = useState([]);

  const commmonHandler = (fieldName, event) => {
    // console.log(fieldName, event.target.value);
    setfromData(prevState => ({
      ...prevState, [fieldName]: event.target.value
    }))

 }

 const submitHandler=(e)=>{
  e.preventDefault();
  console.log(formData);
  setFormInfoArray(prevState=>[...prevState,formData]);
  
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
 
 }


 const [nestedObj,setNestedObj] = useState(
  { 
    name:"",
    age:0,
    mobile:"",
    email:"",
    pincode:"",
    address:{
               tempAddress:"pune",
               permananentAddress:"Mumbai",
               genralAddress:"India"
    },
    gender:"",
    certification:["reactjs","Javascript","Aws"]
}
 );

 const updateCertifiation=()=>{
  console.log("updateCertifiation")
  setNestedObj(prevState=>({
    ...prevState,
    certification:[...prevState.certification,"SQL"]
  }));

}

 
const updateAddress=(fieldName)=>{
  console.log("updateAddress");
  setNestedObj(prevState=>({
           ...prevState,
              address:{
                ...prevState.address,
                [fieldName]:"Nagpur"
              }
  }))
}

const editForm=(obj,position)=>{
  console.log("edit",obj,position);

}
const deleteForm=(obj,position)=>{
  console.log("delete",obj,position);    //0
  setFormInfoArray(prevState=>{
       let newArray = prevState.filter((val,index)=>{
                    if(index !== position){
                       return val;
                    }
       })
       return newArray;
  })
}

  return (
    <>
      <div className='container'>
           
        <div className='row '>
          <div className='col-4 border border-primary p-3 shadow p-3 mb-5 bg-white  m-3 ' style={{height:"500px",overflow:"auto"}}>
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
          {/* <div className='col-4'>
               {formInfoArray.map((val)=>{
                    return (
                      <div>
                    <ul>
                      <li> {val.name}</li>
                      <li> {val.address}</li>
                      <li> {val.age}</li>
                      <li> {val.mobile}</li>
                      <li> {val.email}</li>
                      <li> {val.gender}</li>   
                    </ul>
                    <br></br>
                        </div>
                    )
               })}
          </div> */}

          {/* <div className='col-4'>
            <button className="btn btn-primary mb-3" onClick={()=>updateAddress("genralAddress")}>Update tempAddress</button>
             <p>
             temp Address  === {nestedObj.address.tempAddress}
             </p>
             <p>
             permanant Address ===  {nestedObj.address.permananentAddress}
             </p>
             <p>
            general adres === {nestedObj.address.genralAddress}
             </p>
             <button className="btn btn-primary mb-3" onClick={()=>updateCertifiation()}>Update Certification</button>
             <ul>
                {nestedObj.certification.map((item)=>{
                     return(
                      <li>{item}</li>
                     )
                })}
             </ul>

          </div> */}

          <div className='col-7  border border-primary p-3 shadow p-3 mb-5 bg-white rounded m-3'  style={{height:"500px",overflow:"auto"}}>

          <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Mobile</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Pincode</th>
      <th scope="col">Address</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    
    {
      formInfoArray.map((formobj,index)=>{
           return(
            <tr>
      <td>{formobj.name}</td>
      <td>{formobj.age}</td>
      <td>{formobj.mobile}</td>
      <td>{formobj.gender}</td>
      <td>{formobj.email}</td>
      <td>{formobj.pincode}</td>
      <td>{formobj.address}</td>
      <td><button type='button' className='btn btn-secondary' onClick={()=>editForm(formobj,index)}> edit</button></td>
      <td><button type='button' className='btn btn-danger'onClick={()=>deleteForm(formobj,index)}> delete</button></td>
    </tr>
           )
      })
    }
    
    
  </tbody>
</table>

          </div>
        </div>
      </div>

    </>

  );
}

export default App;
