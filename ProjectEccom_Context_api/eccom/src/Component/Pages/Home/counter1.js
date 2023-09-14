import React, { Component } from 'react';

class Counter1 extends Component {
    shouldComponentUpdate(nextProps,nextState){
        // console.log(this.props.count1,nextProps);
        if(this.props.count1 !== nextProps.count1){
            return true

        }else{return false}
    }
    render() {
        console.log(this.props.count1)
        return (
            <div>
          Counter1:      {this.props.count1}
            </div>
        );
    }
}

export default Counter1;