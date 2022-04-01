import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { movieContext } from '../context/movies/moviesContext';
import { getMovies } from '../helpers/crud';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const { searchMovies }: any = useContext(movieContext);
  const router = useRouter();

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const seekMovies = await getMovies(`/search/movie?query=${search}`);
      console.log(seekMovies);
      searchMovies(seekMovies.results);
      setSearch('');
      router.push(`/search?movie=${search}`);
    } catch (error: any) {
      throw new Error(`error: ${error}`);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-sm-2"
        aria-label="Search"
        onChange={handleChange}
        value={search}
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
}
