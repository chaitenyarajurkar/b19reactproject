import React from 'react';

// 1conditional rendering 
function Heading(){
const isAllowed = true;
if(isAllowed){
    return <h1> It is Allowed</h1>
}else{
    return   <h1>It is Not allowed</h1>;
}
}


export default Heading;


