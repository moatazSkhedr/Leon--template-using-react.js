import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import Feature from './components/feature/Feature';
import Services from './components/Servicess/Services';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div >
        <Navbar />
        <Landing />
        <Feature />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
