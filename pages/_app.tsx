import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Header from '../components/Header';
import MovieWrapper from '../context/movies/moviesContext';

function MovieAPIFetchApp({ Component, pageProps }: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div className="main__content">
      <MovieWrapper>
        <Header />
        <Component {...pageProps} />
      </MovieWrapper>
    </div>
  );
}

export default MovieAPIFetchApp;
