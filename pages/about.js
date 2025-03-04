import Head from 'next/head';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>About Us | InnovationDX</title>
        <meta name="description" content="Learn about the leadership team at InnovationDX, providing cutting-edge PACS solutions for healthcare providers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
} 