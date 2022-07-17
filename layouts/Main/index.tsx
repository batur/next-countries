import React from 'react';

import { Header } from 'components';
import { FC } from 'react';
import { Container } from '@mui/system';

type MainLayoutProps = {
  children: React.ReactNode;
};

const Main: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container component={'main'} maxWidth="lg">
        {children}
      </Container>
    </>
  );
};

export default Main;
