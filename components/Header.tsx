import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Image
} from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            Practice <Image className="logo" src="/img/mierda-logo.png" />{' '}
            Movies
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
  );
}
