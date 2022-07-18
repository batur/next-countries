import { Box } from '@mui/material';
import { useTheme, Container } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <Container maxWidth="lg"></Container>
      <Box
        width={'100vw'}
        height={breakpoint ? '100%' : '100vh'}
        position="fixed"
        left={0}
        top={0}
      >
        <Image
          src="/images/hero-large.jpeg"
          alt="world map near desk globe on brown wooden panel photo"
          layout="fill"
          width="100vw"
          height={breakpoint ? '100%' : '100vh'}
          objectFit="cover"
          priority={true}
        />
      </Box>
    </Box>
  );
};

export default Hero;
