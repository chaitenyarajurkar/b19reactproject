import React, { Component } from 'react';

class SimpleClassCompnent extends Component {
     constructor(){
        super();
        this.state={
            formaData:{},
            userlist:[],
            flag:false
        }
     }

    async componentDidMount(){
        //inital logic
        // api call
        // await logic
     }

     shouldComponentUpdate(){
        return true
     }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SimpleClassCompnent;