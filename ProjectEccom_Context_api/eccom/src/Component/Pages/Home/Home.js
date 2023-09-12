import React, { Component } from 'react';

class Home extends Component {
     constructor(){
        console.log("home")
        super();
        this.state={
            name:"code firt academy",
            flag:true,
            obj:{address:"pnue"},
            list:["onee","two","three"]
        }
     }

    toogle=()=>{
         this.setState(prevState=>({...prevState,flag:!prevState.flag}));
        //  this.setState(prevState=>({...prevState,list:[...prevState.list,"four"]}));
     }
    
  

     static getDerivedStateFromProps(props, state){
        if(props.name !== state.name){
            //Change in props
            return{
                name: props.name
            };
        }
        return null; // No change to state
     }

     componentDidMount() {
            console.log("didmount");
     }
    render() {

        

        return (
            <div>
                <button className='btn btn-primary' onClick={()=>this.toogle()}>Toggle H2</button>
                {this.state.flag && <h2>{this.state.name}</h2>}
            </div>
        );
    }
}

export default Home;


// 1)mounting   > static getDerivedStatefromprops()  > componentDidmount()  > 
// 2)updating
// 3)unmounting


// 1)
// constructor 

// render


// 2)
// construuctor

// getDerivedStatefromprops

// render


// 3)
// constructort

// getDerivedStateFromProps

// render 

// componentDidMount

