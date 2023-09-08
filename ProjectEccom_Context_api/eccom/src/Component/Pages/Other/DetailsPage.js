import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
    let { state } = useLocation();
    console.log(state.cardDetail);
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
                        <button class="btn btn-outline-dark">Buy Now</button>
                        <button class="btn btn-dark">Add to Basket</button>
                    </div>	<div class="search-option">
                        <i class='bx bx-search-alt-2 first-search'></i>
                        <div class="inputs">
                            <input type="text" name="" />
                        </div>
                        <i class='bx bx-share-alt share'></i>
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