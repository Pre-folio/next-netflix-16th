import GlobalStyle from '../styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/fonts.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
