import { Helmet } from 'react-helmet';
import { Header } from '../components/Header';

import { HomeIcon } from '../assets';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="shortcut icon" href={HomeIcon} type="image/x-icon" />
      </Helmet>
      <Header />
    </>
  );
}