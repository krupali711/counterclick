import React, { Component } from 'react';

class Classprops extends Component{

    render() {
        return (

            <div>
                <h6>This is ClassProps</h6>
                <h1>Hello {this.props.name}! Wlcome to React Js</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
export default Classprops;