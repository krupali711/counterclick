import React ,{Component} from 'react';
 class NewComp extends Component{
     constructor(props){
         super(props);

         this.state = {
             message : "SubScribe here to learn react js"
         };
     }
     styles = {
        fontStyle:"bold",
        color:"teal"
      };
     render(){
         return(
             <div className="App">
                 <h1>{this.styles}{this.state.message}</h1>

             </div>
         );
     }
 }
 export default NewComp;