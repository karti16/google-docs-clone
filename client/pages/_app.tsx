import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { StyledEngineProvider } from '@mui/material';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* <StyledEngineProvider injectFirst> */}
      <Component {...pageProps} />
      {/* </StyledEngineProvider> */}
    </SessionProvider>
  );
}
