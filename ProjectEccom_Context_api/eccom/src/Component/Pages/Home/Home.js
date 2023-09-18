import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';
import Counter1 from './counter1';
import Counter2 from './counter2';
import Modal from '../../UI/Modal/Modal';

class Home extends Component {
     constructor(){
        // console.log("parent constructor")
        super();
        this.state={
            name:"code firt academy",
            flag:true,
            obj:{address:"pune"},
            list:["onee","two","three"],
            post:[],
            count1:0,
            count2:0

        }
     }

    toogle=()=>{
         this.setState(prevState=>({...prevState,flag:!prevState.flag}));
        //  this.setState(prevState=>({...prevState,list:[...prevState.list,"four"]}));
     }
    
    

     static getDerivedStateFromProps(props, state){
        // console.log("parent getDerivedStateFromProps",props,state);

        if(props.name !== state.name){
            //Change in props
            return{
                name: props.name
            };
        }
        return null; // No change to state
     }

    async componentDidMount() {
        // console.log("parent componentDidMount"); ///api call kr skte ho
        const response  =await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.setState(prevState=>({
            ...prevState,
            post:response?.data?.data
        }))
     }

     componentWillUnmount(){
        // console.log("tata bye bye gaya")
     }


    render() {

        const {obj,name,flag,count1,count2} = this.state;
        // console.log("parent render");

        return (
            <div>
                {/* <Carousel></Carousel> */}
                <button className='btn btn-primary' onClick={()=>this.toogle()}>Toggle H2</button>
                {flag && <h2>{name}</h2>}
                {obj.address}
                <button className='btn btn-primary' onClick={()=>this.setState(prevState=>({...prevState,count1:count1+1}))}>Count1</button>
                {count1}
                <button className='btn btn-primary' onClick={()=>this.setState(prevState=>({...prevState,count2:count2+1}))}>Count 2</button>
                {count2}
                <Counter1 count1={count1}></Counter1>
                <Counter2 count2={count2}></Counter2>
                
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

