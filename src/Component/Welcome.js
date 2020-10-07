import React, { Component } from 'react';

class Welcome extends Component{
    constructor(props){
    super(props)

    this.state = {
        isLoggedin: true
    }
}

    render(){
        return this.state.isLoggedin ? (
        <div>Welcome Admin</div> ):(
        <div>Welcome Guest</div>)

        // let msg
        // if(this.state.isLoggedin){
        //     msg=<div>Welcome Admin</div>

        // }else{
        //     msg = <div>Welcome Guest</div>
        // }

        // return (
        // <div>{msg}</div>
        // )
        // if(this.state.isLoggedin){
        //     return(
        //     <div><h1>Welcome Admin</h1></div>
        //     ) 
        // }
        // else{
        //     return(<div><h1>Welcome Guest</h1></div>)
            
        // }
    }
}
export default Welcome;