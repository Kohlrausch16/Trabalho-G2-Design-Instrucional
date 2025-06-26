import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound';
import "./main.css";
import LevelSelector from './pages/LevelSelector/LevelSelector';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/level-selector" element={<LevelSelector />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  </StrictMode>
)
