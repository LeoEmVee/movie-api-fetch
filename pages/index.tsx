import { Container } from 'react-bootstrap';
import MovieList from '../components/MovieList';

export default function Home() {
  return (
    <Container className="contents">
      <h1 className="index-text text-center">Practice-Movies</h1>
      <MovieList />
    </Container>
  );
}
