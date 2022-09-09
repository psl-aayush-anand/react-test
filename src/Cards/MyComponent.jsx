import React, { Component } from 'react';
import CreateCard from './CardUI';
import { Card, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MyComponent extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
              counter:1
            }
           
            this.buttons =[];
        }
    
     
        handleTestClick = () => {
            this.setState({ counter: this.state.counter +1});
            this.buttons= [];
            for(let i=0; i<this.state.counter; i++)
                this.buttons.push(<CreateCard />)
        }
    
    
        render() {
            return (
                <div>
                    <Button onClick={this.handleTestClick}>Click Me!</Button>
                    <Container fluid>
                        <Row>
                            {this.buttons}
                        </Row>
                    </Container>
                </div>
            )
        }
    }

export default MyComponent