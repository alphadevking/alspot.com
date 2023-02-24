import Header from '@/site/components/Sections/Header';
import dynamic from 'next/dynamic';

const Head = dynamic(() => import('next/head'));
const Layout = dynamic(() => import('./../site/components/Layout'));

export default function Home() {

  return (
    <>
      <Head>
        <title>ALSpot.com | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout navbar footer>
        <Header />
        <Header />
      </Layout>
    </>
  )
}
