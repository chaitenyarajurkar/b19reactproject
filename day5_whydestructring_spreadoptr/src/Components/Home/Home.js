import React, { useState } from 'react';

// how to update values

//state ==>react concept 
const Home = () => {
   //     const [cars,setCars] =useState("Toyota");
    
//    const updateName=()=>{
//     setCars("BMW");
//    }
let cars = "Toyota";
const updateName=()=>{
 cars="BMW"     // it will not update the html because it is normal js variable
}

    return (
        <div>
            <button onClick={()=>updateName()}>Update Car Name</button>
            <h1>This is {cars}</h1>
        </div>
    );
};

export default Home;