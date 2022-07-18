import type { NextPage } from 'next';

import { useAtom } from 'jotai';
import { getAllCountries } from 'store';

const Home: NextPage = () => {
  const [data] = useAtom(getAllCountries);

  console.log(data);

  return <div></div>;
};

export default Home;
