// import React from 'react';
// import Navbar from './Navbar';
// import About from './About';
// import Works from './Works';



// function App() {
//   return (
//     <div>
//       <Navbar />
//       <About />
//       <Works/>
     
    
     
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'; // Import your Navbar component
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';
import Products from './Products';
import ScrollToTop from './ScrollToTop';
import Why from './CompanyLogos';

function App() {
  return (
    <> {/* Wrap everything inside Router */}
       <Nav /> 
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} /> {/* Default page when app loads */}
        <Route path="/Products" element={<Products />} />
        <Route path="/works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Why />
      <Footer /> {/* Footer is always visible */}
    </>
  );
}

export default App;

