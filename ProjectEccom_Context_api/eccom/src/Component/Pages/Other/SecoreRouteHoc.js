import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
const SecureRouteHoc = (WrappedCompnent)=>{

    
    class NewCoponent extends Component {
        render() {
              const ls = localStorage.getItem("userinfo");

              if(ls !==null){
                return (
                    <div>
                        <WrappedCompnent></WrappedCompnent>
                    </div>
                );

              }else{
                return (
                    <Navigate to="/" ></Navigate>
                )
              }

           
        }
    }
    
    

    return NewCoponent ;



}

export default SecureRouteHoc;