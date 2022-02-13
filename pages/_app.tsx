import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MovieAPIFetchApp({ Component, pageProps }: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MovieAPIFetchApp;
