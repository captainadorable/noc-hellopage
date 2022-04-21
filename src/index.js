import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Layout } from './components/layout/layout'
import { Hero } from './components/hero/hero'
import { About } from './components/about/about'
import { Mission } from './components/mission/mission'
import { Vision } from './components/vision/vision'
import { Pricing } from './components/pricing/pricing'
import { Team } from './components/team/team'

ReactDOM.render(
  <React.StrictMode>
    <Layout title="NON-OFFICIAL">
      <div className='lg:h-screen lg:pt-10 xl:pt-16 pb-8' id='home'>
        <Hero />
      </div>
      <div className='lg:h-screen bg-[#f9f4ef]' id='about'>
        <About />
      </div>
      <div className='lg:h-screen' id='mission'>
        <Mission />
      </div>
      <div className='lg:h-screen bg-[#f9f4ef]' id='vision'>
        <Vision />
      </div>
      <div className='lg:h-screen' id='pricing'>
        <Pricing />
      </div>
      <div id='team' className=''>
        <Team />
      </div>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
