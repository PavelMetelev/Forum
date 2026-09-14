import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Instructions from './components/Instructions';
import Installation from './components/Installation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Instructions />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}
