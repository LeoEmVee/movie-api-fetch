import { Container } from 'react-bootstrap';
import Movie from '../../components/Movie';
import { getMovies } from '../../helpers/crud';

export default function MovieId({ data }) {
  console.log('data: ', data);
  return (
    <Container>
      <Movie />
    </Container>
  );
}

export async function getServerSideProps(ctx: any) {
  const { id } = ctx.query;
  const [result] = await Promise.all([
    {
      movie: await getMovies(`/movie/${id}`),
      cast: await getMovies(`/movie/${id}/credits`)
    }
  ]);

  console.log('result: ', result);

  return {
    props: {
      data: result
    }
  };
}
