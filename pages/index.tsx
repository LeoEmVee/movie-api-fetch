import React from 'react';
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Image
} from 'react-bootstrap';

export default function Home() {
  return (
    <div className="main__content">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              Mierda <Image src="/img/mierda-logo.png" /> Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-sm-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <h1 className="primer__titulo text-center">Hola, Mierda-Movies</h1>
    </div>
  );
}
