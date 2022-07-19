import {
  useTheme,
  Box,
  Typography,
  Link as MuiLink,
  Button,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Box
        component="section"
        sx={{
          position: 'fixed',
          margin: 'auto',
          zIndex: 10,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          left: 0,
          top: 0,
        }}
      >
        <Button
          variant="contained"
          color="info"
          fullWidth
          size="large"
          sx={{
            width: '40%',
          }}
        >
          Browse
        </Button>
      </Box>
      <Box
        width={'100vw'}
        height={breakpoint ? '100%' : '100vh'}
        position="fixed"
        left={0}
        top={0}
        zIndex={-10}
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
        <Box
          position={'absolute'}
          bottom={16}
          right={16}
          color="GrayText"
          boxShadow={3}
          padding={2}
          sx={{
            opacity: 0.5,
          }}
        >
          <Typography>
            Photo by{' '}
            <MuiLink
              color="inherit"
              href="https://unsplash.com/@aslylmz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Aslı Yılmaz{' '}
            </MuiLink>
            on{' '}
            <MuiLink
              color="inherit"
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
