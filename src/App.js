import BlueSection from './components/BlueSection';
import  Crypto from  './components/Crypto';
import Earnings from  './components/Earnings';
import Footer from  './components/Footer';
import GetStarted from  './components/GetStarted';
import Header from  './components/Header';
import Hero from  './components/Hero';
import MoonGuy from  './components/MoonGuy';
import Portfolio from  './components/Portfolio';
import Stats from  './components/Stats';

function App() {
  return (
    <div className="wrapper">
      {/* header */}
      <Header />
      {/* hero */}
      <Hero />
      {/* stats */}
      <Stats />
      {/* earnings */}
      <Earnings />
      {/* portfolio */}
      <Portfolio />
      {/* crypto */}
      <Crypto />
      {/* blue */}
      <BlueSection />
      {/* get started */}
      <GetStarted />
      {/* moon guy */}
      <MoonGuy />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
