import React, {Component} from 'react';
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import Temperature from './Temperature';
import { Container, Row, Col } from 'reactstrap';




class  App  extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }


    
  render() {

      return (
        <div>
        <Container>
  
          <Row style={{ height: '300px'  }}  ><Temperature count={this.state.count} handleClick={this.handleClick} /></Row>
          
         
          <Row>
  
            <Col xs="4" ><Celcius count={this.state.count} /></Col>
            <Col xs="4"> <Fahrenheit count={this.state.count} /></Col>
            <Col xs="4"> <Kelvin count={this.state.count}/> </Col>
  
          </Row>
  
  
  
        </Container>
  
  
  
  
      </div>

      )
  }
}


export default App;
