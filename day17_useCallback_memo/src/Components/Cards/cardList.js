import React from 'react';
import {memo} from 'react';
const CardList = (props) => {
    console.log("child call");
    return (
        <div>
           {props.cardData.map((item,index)=>{

            return(
                <div key={index} className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="..." alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            )

           })} 
        </div>
    );
};

export default memo(CardList);