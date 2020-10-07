// import React from 'react';
import Button from'react-bootstrap/Button';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import bella from './bella.png';
import bellb from './bellb.png';

class Demo extends Component{
    
    constructor(){
        super();
        this.state={
            message: "Welcome to React js",
            sub:"Subscribe",
            imageurl: bella
        };
        this.buttonPress = this.buttonPress.bind(this);
    }
    buttonPress(){
        this.setState({
            message: "Thank You for Subscribing",
            sub:"Subscribed"
            // imageurl: bellb
        });
    };
    // imagechange(){
    //     this.setState({
    //         imageurl: bella,
    //         message:"Thank you for Subscribing"
    //     })
    // }
    styles={
        fontStyle:"italic",
        color:"purple"
    };
    render(){
        return(
            
            <div className="App">
                <h1 style={this.styles}>{this.state.message}</h1>
                <Button onClick={this.buttonPress}>{this.state.sub}</Button>
                <p />
                <img style={{height:"30px" , width:"30px"}}
                src={this.state.imageurl} alt="" />
            </div>
        )
        }
}

export default Demo;