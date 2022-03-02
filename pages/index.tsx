import { Container } from 'react-bootstrap';
import MovieList from '../components/MovieList';

export default function Home() {
  return (
    <Container>
      <h1 className="text-center">Mierda-Movies</h1>
      <MovieList />
    </Container>
  );
}
