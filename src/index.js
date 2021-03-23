import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard.js';
import Slogan from './components/slogan.js';
import Sobre from './components/sobre.js'
import Footer from './components/footer.js';

ReactDOM.render(
  <React.StrictMode>
    <Slogan/>
    <Sobre/>
    <Dashboard/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

