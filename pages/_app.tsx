import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Header from '../components/Header';

function MovieAPIFetchApp({ Component, pageProps }: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div className="main__content">
      <Header />
      <Component {...pageProps} />)
    </div>
  );
}

export default MovieAPIFetchApp;
