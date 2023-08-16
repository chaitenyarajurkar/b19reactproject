import React, { useCallback, useEffect, useMemo, useState } from 'react';

// useState
// useEffect
// useCallback
// useContext
// useMemo
// useReducer 

const Effect = () => {
    const [name,setName] = useState("")
    const [count,setCount] = useState(0);
    const [conttwo,setCounttwo] = useState(12);
    useEffect(()=>{
        debugger;
        console.log("UseEffect call",count);   //api call logic 
        setCount(10);
    },[conttwo])
     const increment = ()=>{
        setCount(count + 1);
     }

     const incrementTwo = ()=>{
        setCounttwo(conttwo + 1);
     }

    return (
        <div>
            Heelo Effect =={count}   <br />
            <button className='btn btn-primary' onClick={()=>increment()}>Increment Count</button>

            Counter {conttwo}
            <button className='btn btn-primary' onClick={()=>incrementTwo()}>Increment Count</button>
        </div>
    );
};

export default Effect;