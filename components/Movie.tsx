import { Button, Col, Container, Image, Row } from 'react-bootstrap';

export default function Movie() {
  return (
    <Container>
      <h1 className="text-center my-5">Mierda-movie-prueba</h1>;
      <Row>
        <Col md={4}>
          <Image
            src="https://i1.sndcdn.com/artworks-000469915644-5ssd5g-t500x500.jpg"
            thumbnail
          />
        </Col>
        <Col md={8}>
          <Container>
            <div className="py-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                <b>Release date: </b>01.01.0001
                <b>Home page: </b>https://forocoches.com
              </p>
            </div>
          </Container>
          <Button className="d-block m-auto">Cast</Button>
        </Col>
      </Row>
    </Container>
  );
}
