import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Title from './general/title';
import Nav from './general/Nav';
import Painting from "./components/painting";
import Photography from './components/photography';
import Digital from './components/digital';
import Charcoal from './components/charcoal';
import Mary from './components/mary';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Nav />
      <Routes>
        <Route path="/painting" element={<Painting />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/charcoal" element={<Charcoal />} />
        <Route path="/mary" element={<Mary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
