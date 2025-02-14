
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'; // Import your Navbar component

import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';
import Products from './Products';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import CompanyLogos from './CompanyLogos';

function App() {
  return (
    <> {/* Wrap everything inside Router */}
       <Nav /> 
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default page when app loads */}
        <Route path="/Products" element={<Products />} />
        <Route path="/works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <CompanyLogos />
      <Footer /> {/* Footer is always visible */}
    </>
  );
}

export default App;

