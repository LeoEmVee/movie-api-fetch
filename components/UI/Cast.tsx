import { useContext, useState } from 'react';
import { movieContext } from '../../context/movies/moviesContext';
import { Container, Button, Row, Col, Card, Collapse } from 'react-bootstrap';

const PIC_ID = process.env.NEXT_PUBLIC_PIC_ID;

export default function Cast() {
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
          <Row className="my-4 mx-1">
            {cast.length
              ? cast.map((c: any) => (
                  <Col md={4} key={c.id}>
                    <Card className="cast-card-body">
                      <Card.Img
                        src={
                          c.profile_path
                            ? `${PIC_ID}/${c.profile_path}`
                            : '/img/logo-para-apps.png'
                        }
                        className="img-thumbnail"
                      />
                      {!c.profile_path &&
                        `No, ${c.name} is not this nice guy, but there's no pic available here`}
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
