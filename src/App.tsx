import React from 'react';

import { Aboutus, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, Menu } from './container';
import { Navbar } from './components';
import './App.css';
const App = () => (

  <div>
    <Navbar />
    <Header />
    <Aboutus />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
  </div>
);

export default App;
