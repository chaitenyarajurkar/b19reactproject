import React from 'react';
import './dashboard.css';
function Dashboard(){

    return(
        <div className='headingColor'>
          <h1 style={{color:"black",backgroundColor:"blue",paddingLeft:"20px"}}>
           Welcome to react....!!!
          </h1>
          <button type='button' className='btn btn-primary'> Click here</button>
        </div>
    )
}

export default Dashboard;