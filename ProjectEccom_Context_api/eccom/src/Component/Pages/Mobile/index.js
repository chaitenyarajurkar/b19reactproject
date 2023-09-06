import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
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
                        <img className="card-img-top pt-2"  style={{objectFit:"contain",height:150}} src={item.productImageUrl} alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.productShortName}</h5>
                            <p className="card-text">{item.productDescription}</p>
                            {/* <a href="/" className="btn btn-primary">Add To Cart</a> */}
                            <div className='d-flex justify-content-between'>

                            <p><strong>RS:</strong> {item.productPrice}</p>
                            <FontAwesomeIcon icon={faCartShopping} className='pt-2'/>
                            <Link to="/detailspage" state={{ cardDetail: item }} >detail{">"}</Link>
                            </div>
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