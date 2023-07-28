import React from 'react';
import { useNavigate } from 'react-router-dom';

const Feature = () => {
    const nvaigate = useNavigate();
    const callToHome=()=>{
        nvaigate('/home');
    }
    return (
        <div>
            <h1>This is Feature</h1>
            <button className='btn btn-primary'onClick={()=>callToHome()}>Navigate to home</button>
        </div>
    );
};

export default Feature;