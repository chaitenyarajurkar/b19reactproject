import React, { useState } from 'react';
import Text from '../../UI/Text/Text';
import Button from '../../UI/Button/Button';
import Label from '../../UI/Label/Label';
import axios from 'axios';
import Modal from '../../UI/Modal/Modal';


const Signup = () => {

    const [signupdata,setSignupdata] = useState({Name:"code first",MobileNo:"",Password:""})
    const [error,setError] = useState([]);
    const [respMessage,setRespMessage] = useState("");
    const [show,setShow] = useState(false);
    const onChangeHandler =(fieldName,value)=>{
        console.log(fieldName,value)
        setSignupdata(prevState=>({...prevState,[fieldName]:value}))
    }
    const onSubmitHandler= async(e)=>{
       e.preventDefault()
       console.log(signupdata);
       let localerrorkeys =[];
       for(let x in signupdata){
            if(signupdata[x] === ""){
                localerrorkeys.push(x)
            }
       }

       setError(localerrorkeys);

       if(localerrorkeys.length === 0){
        // api call

        try {
            let result = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/RegisterCustomer",signupdata);
            console.log(result.data.data);
            setRespMessage(result.data.message);
            setShow(true);
            setSignupdata({Name:"code first",MobileNo:"",Password:""});
            
        } catch (error) {
            console.log(error);
        }
    }else{
        
        alert(localerrorkeys)
       }

    }

   const handleError = (fieldName) =>{
    return error.indexOf(fieldName) > -1 ? true : false ;
   }

   const hideModal = ()=>{
    setShow(false);
}

    return (
        <div className='offset-4 col-4'>
            <Modal title="Sign Up" content={respMessage} show={show} hideModal={hideModal} ></Modal>
            <h2 className='text-center'>Signup Form </h2>
              <form onSubmit={(e)=>onSubmitHandler(e)}>
                <Label label="Name"></Label>
                <input type='text' ></input>
               <Text type="text" placeholder="name" value={signupdata.Name} fieldName="Name" onChangeHandler={onChangeHandler} error={handleError("Name")} ></Text>
               <Label label="Mobile"></Label>
               <Text type="text" placeholder="mobile" fieldName="MobileNo" onChangeHandler={onChangeHandler}  error={handleError("MobileNo")} ></Text>
               <Label label="Password"></Label>
               <Text type="password" placeholder="password" fieldName="Password" onChangeHandler={onChangeHandler}  error={handleError("Password")} ></Text>
               <Button label="Submit"></Button>
               </form>
 
              <ul>
               {error.map((item)=>{
                return(
                  <li>{item}</li>
                )
               })}
               </ul>
        </div>
    );
};

export default Signup;