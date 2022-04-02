import { useState, useEffect, useContext } from 'react';
import { movieContext } from '../context/movies/moviesContext';
import { Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import formatter from '../helpers/time-formatter';
import { useRouter } from 'next/router';

const PIC_ID = process.env.NEXT_PUBLIC_PIC_ID;

export default function MovieList() {
  const [showMovies, setShowMovies] = useState([]);
  const { movies, searchMovie }: any = useContext(movieContext);
  const router = useRouter();

  useEffect(() => {
    const render = () =>
      router.pathname === '/search'
        ? setShowMovies(searchMovie)
        : setShowMovies(movies);
    render();
  }, [router, showMovies, movies]);

  return (
    <Row>
      {(showMovies.length &&
        showMovies.map((m: any) => (
          <Col md={4} className="my-3" key={m.id}>
            <Card>
              <Card.Img
                variant="top"
                src={`${PIC_ID}/${m.backdrop_path}`}
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="movie-link">
                  <Link href={`/movies/${m.id}`}>{m.original_title}</Link>
                </Card.Title>
                <Card.Text>
                  {m.overview.slice(0, 100) +
                    `${(m.overview.length > 100 && '...') || ''}`}
                </Card.Text>
                <Card.Subtitle>
                  <b>Release date: </b>
                  {formatter(m.release_date)}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))) || (
        <h1 className="not-found contents text-center">
          No movies found. Try another search
        </h1>
      )}
    </Row>
  );
}
