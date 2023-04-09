import React, {Component} from 'react';


class Temperature extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    render() {

        return (
            <div>
            <h3>Hava bugün nasıl ?</h3>
            <p>Şu an sıcaklık {this.props.count} derece</p>
            <button onClick={this.props.handleClick}>Sıcaklık Artır</button>
          </div>
        );
    }



}

export default Temperature ;