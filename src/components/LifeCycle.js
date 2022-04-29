import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Welcome",value:"guys"
        }

    }

    componentWillMount() {

        alert("Hi welcome");
        console.log("willmount");
    }

    componentDidMount() {
    
       setTimeout(()=>{
        this.setState({name:"learn"});
       },1000)
    //    this.setState({name:"learn"});
       console.log("did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("will receive");
        
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log("should");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
alert("do you want update");
console.log("will update");
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        console.log("render");
        return (
           
            <div>
            <h1>{this.state.name}</h1>
            </div>
        );
    }
}

LifeCycle.propTypes = {

};

export default LifeCycle;