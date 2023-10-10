
    import React, { Component } from 'react';


const Hoc = (WrappedComponent) => {


    


    
    class NewComponent extends Component {
        render() {
            return (
                <div style={{backgroundColor:"red"}}>
                    <p>Hello I am modified</p>
                    <WrappedComponent></WrappedComponent>
                </div>
            );
        }
    }
    



    return NewComponent
    
   




};

export default Hoc;