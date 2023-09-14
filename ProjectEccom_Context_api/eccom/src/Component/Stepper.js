import React, { useState } from 'react';

const Stepper = () => {

    const [stepperData,setStepperData] = useState([

        {name:"",address:"",age:""},
        {mobileNo:"",image:""},
        {gender:"",emai:""},
        {fin:""}
    ])
 
    let step = 0
    return (<>
        <div className='step1'>
            <form>
                <input type="text" value={stepperData[step-1].name} placeholder='name'></input>
                <input type="text" value={stepperData[step-1].address} placeholder='address'></input>
                <input type="text" value={stepperData[step-1].age} placeholder='age'></input>
            </form>
            
        </div>
        <div className='step2'>
            <form>
                <input type="text" value={stepperData[step-1].mobileNo} placeholder='mobileNo'></input>
                <input type="text"value={stepperData[step-1].image}  placeholder='image'></input>
                
            </form>
            
        </div>

        <div className='step3'>
            <form>
                <input type="text" placeholder='gender'></input>
                <input type="text" placeholder='emai'></input>
                
            </form>
            
        </div>
        </>
    );
};

export default Stepper;