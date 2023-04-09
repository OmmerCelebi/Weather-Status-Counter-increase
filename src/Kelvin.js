import React, {Component} from 'react';


class Kelvin extends Component { 
    render() {

        return (
            <div>
              <p>Kelvin {this.props.count + 273.15} K</p>
 
            </div>
        );
    }



}

export default Kelvin  ;