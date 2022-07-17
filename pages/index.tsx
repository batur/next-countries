import type { NextPage } from 'next';

import { useAtom } from 'jotai';
import { count } from 'store';
import { useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const Home: NextPage = () => {
  const [defaultCount, setCount] = useAtom(count);

  useEffect(() => {
    console.log(defaultCount);
  }, [defaultCount]);

  function increaseCount() {
    setCount(defaultCount + 1);
  }
  return (
    <div>
      <Typography variant="h4" component="h1">
        {defaultCount}
      </Typography>
      <Button onClick={increaseCount}>Increase Count</Button>
    </div>
  );
};

export default Home;
