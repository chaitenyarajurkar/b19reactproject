import React, { useState } from 'react';

const Accodian = () => {
    const [flag,setFlag] = useState(false);

    const [formObj,setFomOBj] = useState({
            name:"dfdfdfdfd",
            age:"",
            address:"",
            pincode:"",
           
    });

     const [formArray,setFormArray] = useState([]);

   const changeHandler =(value)=>{
    setFomOBj(prevState=>({...prevState,name:value}))
   }
    
   const changeHandlerage = (value) =>{
    setFomOBj(prevState=>({...prevState,age:value}))

   }
   const commonHandler = (value,fieldName) =>{
    setFomOBj(prevState=>({...prevState,[fieldName]:value}))
   }
const addDataToarray =()=>{
  
  setFormArray(prevState=>[...prevState,formObj])  //[formobj1,formobj2,formobj3]
  setFormArray(prevState=>[formObj,...prevState])   // [formobj3,forpbj2,formboj1]
}
   
    return (
        <div>
          <input type='text' value={formObj.name} onChange={(e)=>commonHandler(e.target.value,"name")}></input>
          <input type='text' value={formObj.age} onChange={(e)=>commonHandler(e.target.value,"age")}></input>
          <input type='text' value={formObj.address} onChange={(e)=>commonHandler(e.target.value,"address")}></input>
          <input type='text' value={formObj.pincode} onChange={(e)=>commonHandler(e.target.value,"pincode")}></input>
          
             <button onClick={()=>addDataToarray()}>Sumbit </button>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  onClick={()=>setFlag(!flag)}>
        Accordion Item #1
      </button>
    </h2>
    {flag && <div id="collapseOne" className={flag ?"accordion-collapse collapse show" :  "accordion-collapse collapse"} >
      <div className="accordion-body">
        
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>}
       {/* <span>{flag ? ("+") : ("-")}</span> */}
  </div>
  
  
</div>
            
        </div>
    );
};

export default Accodian;