import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'

export default class Oneproduct extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/4879363/pexels-photo-4879363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ></Card.Img>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

