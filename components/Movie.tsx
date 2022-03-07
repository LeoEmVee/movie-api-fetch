import { useContext } from 'react';
import { movieContext } from '../context/movies/moviesContext';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Collapsed from './UI/Collapsed';

const PIC_ID = process.env.NEXT_PUBLIC_PIC_ID;

export default function Movie() {
  const { movie }: any = useContext(movieContext);

  return (
    <Container>
      <h1 className="text-center my-5">{movie.original_title}</h1>;
      <Row>
        <Col md={4}>
          <Image
            src={
              movie.poster_path ? `${PIC_ID}/${movie.poster_path}` : undefined
            }
            className="img-thumbnail"
          />
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
            <Collapsed />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
