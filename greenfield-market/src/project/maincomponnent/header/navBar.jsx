import React from 'react'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class Navbart extends React.Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Navbar.Brand href="home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link"> Register</Link>


                </Nav>
            </Navbar>
            </div>
        )
    }
};