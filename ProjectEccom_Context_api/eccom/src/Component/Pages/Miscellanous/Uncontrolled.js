import React, { useRef } from 'react';


//the component which are not controlled by state varaibles are called uncontrolled component

//useRef hook or js
const Uncontrolled = () => {
    let lastname = useRef();

    const submitHandler=(e)=>{
         e.preventDefault();
         const ele = document.getElementById("name").value;
         alert(ele);
         alert(lastname.current.value);
    }
    return (
        <div className='mt-5 text-center'>

            <form onSubmit={(e)=>submitHandler(e)}>
               <input type='text' id="name" />
               <br></br>
               <input type='text' className='mt-3' ref={lastname} />
               <br></br>
               <button type='submit' className='mt-3 btn btn-danger'>Submit</button>
            </form>
            
        </div>
    );
};

export default Uncontrolled;