import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./App.css";
import "./Responsive.css"
import "./Mobile.css"
import App from './App.jsx'
// import { Header } from './components/UI/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Header /> */}
  </StrictMode>,
)
