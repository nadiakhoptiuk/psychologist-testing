import { Layout } from '@/layout';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Layout data={pageProps} className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
