import React from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
