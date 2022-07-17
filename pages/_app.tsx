import type { AppProps } from 'next/app';

import { Provider as JotaiProvider } from 'jotai';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: isDarkModeEnabled ? 'dark' : 'light',
    },
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Next-Countries</title>
      </Head>
      <JotaiProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </JotaiProvider>
    </>
  );
}

export default MyApp;
