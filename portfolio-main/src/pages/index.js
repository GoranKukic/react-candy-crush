import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Goran Kukić | Dev</title>
        <html lang={lang} />
        <meta name="description" content="Front-End Developer" />
        <meta
          name="keywords"
          content="Front-End, Front, End, Web, Software, Developer, Engineer, Programmer, React, Javascript, Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Goran Kukić | Dev" />
        <meta property="og:description" content="Front-End Developer" />
        {/* <meta property="og:image" content="#" /> */}
        {/* <meta property="og:url" content="#" /> */}
      </Helmet>
      <App />
    </>
  );
};
