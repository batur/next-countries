import { AppBar, Toolbar, Link as MuiLink } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <AppBar enableColorOnDark position="fixed">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link href={'/'}>
              <MuiLink variant="h6" underline="none" color="inherit">
                Next-Countries
              </MuiLink>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
