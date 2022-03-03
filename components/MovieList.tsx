import { useContext } from 'react';
import { movieContext } from '../context/movies/moviesContext';
import { Card, Row, Col } from 'react-bootstrap';

const PIC_ID = process.env.NEXT_PUBLIC_PIC_ID;

export default function MovieList() {
  const { movies }: any = useContext(movieContext);
  movies.length && console.log('movies: ', movies);

  const formatter = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  return (
    <Row>
      {movies.length &&
        movies.map((m: any) => (
          <Col md={4} className="my-3" key={m.id}>
            <Card>
              <Card.Img
                variant="top"
                src={`${PIC_ID}/${m.backdrop_path}`}
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title>{m.original_title}</Card.Title>
                <Card.Text>{m.overview}</Card.Text>
                <Card.Subtitle>
                  Release date: {formatter.format(Date.parse(m.release_date))}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
}
