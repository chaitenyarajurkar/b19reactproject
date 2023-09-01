import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Mobile = () => {
    const [mobileData,setMobileData] = useState([]);

    useEffect(()=>{
      
        const getMobileData = async() =>{
            try {
                const res = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId',{params:{id:1}})   
                console.log(res);
                setMobileData(res.data.data);
        
            } catch (error) {
             
            }
        } 
        getMobileData();

    },[])
    return (
        <div>
            <h1>These are Mobiles</h1>
        </div>
    );
};

export default Mobile;