import { Container } from 'react-bootstrap';
import MovieList from '../components/MovieList';

export default function SearchPage() {
  return (
    <Container>
      <h1 className="primerTitulo my-3">Movies</h1>
      <MovieList />
    </Container>
  );
}
