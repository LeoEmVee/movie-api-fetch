import { useContext } from 'react';
import { movieContext } from '../context/movies/moviesContext';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const PIC_ID = process.env.NEXT_PUBLIC_PIC_ID;

export default function Movie() {
  const { movie } = useContext(movieContext);
  console.log('movie: ', movie);

  return (
    <Container>
      <h1 className="text-center my-5">{movie.original_title}</h1>;
      <Row>
        <Col md={4}>
          <Image src={`${PIC_ID}/${movie.poster_path}`} thumbnail />
        </Col>
        <Col md={8}>
          <Container>
            <div className="py-3">
              <p>{movie.overview}</p>
              <p>
                <b>Release date: </b>
                {movie.release_date}
              </p>
              <p>
                <b>Homepage: </b>
                {(movie.homepage && movie.homepage) || 'N/A'}
              </p>
            </div>
          </Container>
          <Button className="d-block m-auto">Cast</Button>
        </Col>
      </Row>
    </Container>
  );
}
