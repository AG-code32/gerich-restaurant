import React from 'react';

import AboutUs from './container/AboutUs/AboutUs.jsx';
import Chef from './container/Chef/Chef.jsx';
import FindUs from './container/FindUs/FindUs.jsx';
import Footer from './container/Footer/Footer.jsx';
import Gallery from './container/Gallery/Gallery.jsx';
import Header from './container/Header/Header.jsx';
import Intro from './container/Intro/Intro.jsx';
import Laurels from './container/Laurels/Laurels.jsx';
import SpecialMenu from './container/Menu/SpecialMenu.jsx';

import Navbar from './components/Navbar/Navbar.jsx';

import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
)}

export default App