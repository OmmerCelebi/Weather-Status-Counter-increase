import React, {Component} from 'react';


class Fahrenheit  extends Component { 
    render() {

        return (
            <div>
            
        <p>Fahrenheit {(this.props.count * 9/5) + 32} °F</p>
            </div>
        );
    }



}

export default Fahrenheit  ;