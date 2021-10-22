import { AppProps } from 'next/app';
import '../styles/global.scss';
import { Header } from '../components/Header';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "AU5xpEpJyz7IKcf6iq-7GalJRqdiw0J09pd-uwCMAfx3LQ-Zj30_TsO-rn2SnIl_q1GQZUwkXkrGjquZ",
  currency: "BRL",
  intent: "capture",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextAuthProvider session={pageProps.session}>
    <PayPalScriptProvider options={initialOptions}>
      <Header />
      <Component {...pageProps} />
    </PayPalScriptProvider>
  </NextAuthProvider>
  )
}

export default MyApp
