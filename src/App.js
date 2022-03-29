import React from 'react' 
import './App.css';
import {Navbar,Nav,Container,Carousel,Form,Button} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Meubles</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#features">Nos articles</Nav.Link>
      <Nav.Link href="#pricing">Contacts</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
      <div className='carousel'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1589565176356-a586e73f56f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Table basse </h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Chaise</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Lit chambre à coucher</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      <h1>Sign up now</h1>
      <div className='forms'>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </div>
 
    </div>
  );
}

export default App;
