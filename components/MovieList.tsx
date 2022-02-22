import { Card, Row, Col } from 'react-bootstrap';

export default function MovieList() {
  return (
    <Row>
      <Col md={4} className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src="http://image.tmdb.org/t/p/w300/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
            className="img-thumbnail"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Subtitle>Release date: 01.01.0001 </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
