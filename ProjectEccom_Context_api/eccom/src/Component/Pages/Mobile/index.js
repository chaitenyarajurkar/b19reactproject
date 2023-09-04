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
            <h1 className='text-center'>Mobiles :</h1>
            <div className='row'>

          
              {
                mobileData?.length > 0 && mobileData.map((item)=>{

                    return(
                        <div className="card col-4 m-2 " style={{ width: "18rem" ,height:"200" }}>
                        <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.productShortName}</h5>
                            <p className="card-text">{item.productDescription}</p>
                            <a href="/" className="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                    )
                })
              }
             </div>
        </div>
    );
};

export default Mobile;