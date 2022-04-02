import { Navbar, Container, Image } from 'react-bootstrap';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="brand" href="/">
            Practice <Image className="logo" src="/img/logo-para-apps.png" />{' '}
            Movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <SearchBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
