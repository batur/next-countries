import type { AppProps } from 'next/app';

import { Provider as JotaiProvider } from 'jotai';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: isDarkModeEnabled ? 'dark' : 'light',
    },
  });

  return (
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </JotaiProvider>
  );
}

export default MyApp;
