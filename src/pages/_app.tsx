import GlobalStyle from '../styles/GlobalStyle';
import '../styles/fonts.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
