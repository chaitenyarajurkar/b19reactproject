import React, { Component } from 'react';

class Home extends Component {
     constructor(){
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