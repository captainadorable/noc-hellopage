import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Pages404 } from './pages/pages404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mainpage } from './pages/Hellopages';
import { Kurumsal } from './pages/kurumsal';
import { Kurumsalreading } from './pages/kurumsalreading';
import { Ekip } from './pages/ekip';
import { Ekipreading } from './pages/ekipreading';
import { Paketler } from './pages/Paketler';
import { IdContextProvider } from './contexts/IdContext'

ReactDOM.render(
  <IdContextProvider >
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Pages404/>}/>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Kurumsal" element={<Kurumsal/>}/>
        <Route path="/Kurumsal/:id" element={<Kurumsalreading/>}/>
        <Route path="/Ekip" element={<Ekip/>}/>
        <Route path="/Ekip/:user" element={<Ekipreading/>}/>
        <Route path="/Paketler" element={<Paketler/>}/>
      </Routes>
    </BrowserRouter>
  </IdContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
