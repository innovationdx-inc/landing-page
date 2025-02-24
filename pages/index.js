import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AIReportGeneration from '../components/AIReportGeneration';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>InnovationDX | Advanced PACS Solutions</title>
        <meta name="description" content="InnovationDX provides cutting-edge PACS solutions for healthcare providers, improving diagnostic workflows and patient care with AI-powered radiology reporting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <AIReportGeneration />
        <Solutions />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
} 