import React from 'react';
import Comp2 from './Comp2';

export default class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
}


render() {
    const clicks = () => {
        this.setState({
            count:(this.state.count || 0) + 1
        })
    }
    return (
        <div className="parent">
            <div className="count">
                Number of clicks: {this.state.count}
            </div>
            <Comp2 count={clicks}/>
        </div>
    );
}
}