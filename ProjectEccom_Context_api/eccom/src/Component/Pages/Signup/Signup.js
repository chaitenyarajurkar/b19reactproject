import React, { useState } from 'react';
import Text from '../../UI/Text/Text';
import Button from '../../UI/Button/Button';
import Label from '../../UI/Label/Label';
import { faL } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {

    const [signupdata,setSignupdata] = useState({Name:"code first",MobileNo:"",Password:""})
    const [error,setError] = useState([]);
    const onChangeHandler =(fieldName,value)=>{
        console.log(fieldName,value)
        setSignupdata(prevState=>({...prevState,[fieldName]:value}))
    }
    const onSubmitHandler=(e)=>{
       e.preventDefault()
       console.log(signupdata);
       for(let x in signupdata){
            if(signupdata[x] === ""){
                setError(prevState=>[...prevState,x])
            }
       }
    }

    // const displayList=()=>{
    //     return "Hello world this is react written by function";
    // }



//     let text = ["hello","world","welcome","to","js"];
// let result = text.indexOf("welcomedsdsd");
// console.log(result)

   const handleError = (fieldName) =>{
    return error.indexOf(fieldName) > -1 ? true : false ;
   }

    return (
        <div className='offset-4 col-4'>
            <h2 className='text-center'>Signup Form </h2>
              <form onSubmit={(e)=>onSubmitHandler(e)}>
                <Label label="Name"></Label>
               <Text type="text" placeholder="name" value={signupdata.Name} fieldName="Name" onChangeHandler={onChangeHandler} error={handleError("Name")} ></Text>
               <Label label="Mobile"></Label>
               <Text type="text" placeholder="mobile" fieldName="MobileNo" onChangeHandler={onChangeHandler}  error={handleError("MobileNo")} ></Text>
               <Label label="Password"></Label>
               <Text type="password" placeholder="password" fieldName="Password" onChangeHandler={onChangeHandler}  error={handleError("Password")} ></Text>
               <Button label="Submit"></Button>
               </form>

               {/* <h4>{displayList()}</h4> */}
        </div>
    );
};

export default Signup;