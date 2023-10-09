import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setCameraDataredux} from '../../../Redux/react-redux/action';
import { baseurl } from '../../../assets/common';
//useSelector  => this use to access data from react-redux store
//useDispatch  =>this hook is used for calling redux action functions
const Camera = () => {
    const [cameraData,setCameraData] = useState([]);
    
    const globalCameraData = useSelector(state=>state.reducer.globalCameraData);
    
    const dispatch = useDispatch();
    useEffect(()=>{
      
        const getcameraData = async() =>{
            try {
                const url = baseurl+'/GetAllProductsByCategoryId';
                const res = await axios.get(url,{params:{id:2}})   
                console.log(res);
                setCameraData(res.data.data);
                dispatch(setCameraDataredux(res.data.data)); //globall storing the data
              
        
            } catch (error) {
             
            }
        } 
        if(globalCameraData.length > 0){
            setCameraData(globalCameraData);
        }else{
            getcameraData();

        }

    },[])
    debugger
    console.log(cameraData);
    return (
        <div>
            <h1 className='text-center'>: Camera :</h1>
            <div className='row'>
              {
                cameraData?.length > 0 && cameraData.map((item)=>{

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
                            <Link to="/detailspage/sdsd/fdfdfd" state={{ cardDetail: item }} >detail{">"}</Link>
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

export default Camera;