import { useContext, useEffect } from 'react';
import { movieContext } from '../../context/movies/moviesContext';
import { Container } from 'react-bootstrap';
import Movie from '../../components/Movie';
import { getMovies } from '../../helpers/crud';

export default function MovieId({ data }: any) {
  const { movie, cast } = data;
  const { getMovieById, getCast }: any = useContext(movieContext);

  useEffect(() => {
    if (Object.keys(data).length) {
      getMovieById(movie);
      getCast(cast.cast);
    }
  }, [data]);

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
  
  return {
    props: {
      data: result
    }
  };
}
