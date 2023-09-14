import React, { Component } from 'react';

class Counter2 extends Component {
    shouldComponentUpdate(nextProps,nextState){
        // console.log(this.props.count1,nextProps);
        if(this.props.count2 !== nextProps.count2){
            return true

        }else{return false}
    }
    render() {
        console.log(this.props.count2)
        return (
            <div>
              Counter2:  {this.props.count2}
            </div>
        );
    }
}

export default Counter2;