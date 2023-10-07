import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AppContext } from '../../../App';

const DetailsPage = () => {
    const constext = useContext(AppContext);
    let { state } = useLocation();
    let params = useParams();
    const [count,setCount] = useState(1);
    console.log(state.cardDetail,params);

    const AddotCartFunction=()=>{
        //addt to cart api//

        //succes vala response milega//

        //https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=34//
        //respinse upate cart items//items.length =>cart count
        constext.getUpdateCartount(count);

    }
    return (
        <div>
            <div>

                <div class="container mt-5 mb-5">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-6 border-end">
                                <div class="d-flex flex-column justify-content-center">
                                    <div class="main_image">
                                        <img src={state?.cardDetail?.productImageUrl} id="sd" alt='ddd' width="350" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 right-side">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3>{state?.cardDetail?.productName}</h3>
                                        <span class="heart"><i class='bx bx-heart'></i></span>
                                    </div>
                                    <div class="mt-2 pr-3 content">
                                        <p>{state?.cardDetail?.productDescription}</p>
                                    </div>
                                    <h3>${state?.cardDetail?.productPrice}</h3>
                                    <div className="d-flex flex-row align-items-center">

                                        <span>441 reviews</span>
                                    </div>

                                    <div class="buttons d-flex flex-row mt-5 gap-3">
                                        
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button"onClick={()=>setCount(count+1)} class="btn btn-secondary"><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></button>
                                        <button type="button" class="btn btn-light">{count}</button>
                                        <button type="button" onClick={()=>setCount(prev=> count === 1 ? 1 : count-1)} class="btn btn-secondary"><FontAwesomeIcon icon={faMinus} ></FontAwesomeIcon></button>
                                    </div>
                                    <button class="btn btn-outline-dark">Buy Now</button>
                                        <button class="btn btn-dark" onClick={()=>AddotCartFunction()}>Add to Cart</button>
                                    </div>	

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;