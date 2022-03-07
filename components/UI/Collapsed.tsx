import { useContext, useState } from 'react';
import { movieContext } from '../../context/movies/moviesContext';
import { Container, Button, Row, Col, Card, Collapse } from 'react-bootstrap';

const PIC_ID = process.env.NEXT_PUBLIC_PIC_ID;

export default function Collapsed() {
  const [open, setOpen] = useState(false);
  const { cast }: any = useContext(movieContext);
  return (
    <Container>
      <Button
        className="d-block m-auto"
        onClick={() => setOpen(!open)}
        aria-controls="show-movies"
        aria-expanded={open}
      >
        Cast
      </Button>
      <Collapse in={open}>
        <div id="show-movies">
          <Row className="my-3">
            {cast.length
              ? cast.map((c: any) => (
                  <Col md={4} key={c.id}>
                    <Card>
                      <Card.Img
                        src={
                          c.profile_path
                            ? `${PIC_ID}/${c.profile_path}`
                            : '/img/mierda-logo.png'
                        }
                        className="img-thumbnail"
                      />
                      <Card.Body>
                        <Card.Title>{c.character}</Card.Title>
                        <Card.Subtitle>{c.name}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </div>
      </Collapse>
    </Container>
  );
}
