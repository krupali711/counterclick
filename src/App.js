import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classprops from './Component/Classprops';
import Demo from './Component/Demo';
// import NewComp from './Component/NewComp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';
import Welcome from './Component/Welcome';
import Namelist from './Component/Namelist';
import Person from './Component/Person';


class App extends React.Component{
  // styles = {
  //   fontStyle:"bold",
  //   color:"teal"
  // };
  render(){
    return(
      <div className="App"> 
       {/* <Classprops name="ABC" place="Amdvd">
          <h1>This is CHild Component</h1>
        </Classprops>
        <Classprops name="PQR" place ="Surat">
          <button>Click Here.this is also Child Component</button>
        </Classprops>

        <Classprops name="XYZ"  place="Baroda"></Classprops> */}
        {/* <h1 style={this.styles}>Hello </h1>
        <Demo /> */}
        {/* <h1><button>Click</button></h1> */}

          <Comp1 /> 

        {/* <Comp2 />  */}

        {/* // <Welcome />
        <Namelist /> */}
        </div>
    );
  }
}
  export default App;


