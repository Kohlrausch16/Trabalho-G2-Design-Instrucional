import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import "./main.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  </StrictMode>
)
