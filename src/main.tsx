import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchemeDetail from '@/components/Scheme/SchemeDetail';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
      <Routes>
        <Route path="/" element={< App />} />
        <Route path="/about" element={<h1> hello </h1>} />
                <Route path="/scheme/:id" element={<SchemeDetail/>} />
      </Routes>
    </Router>
  </StrictMode>
);


// src/App.jsx



export default App;
