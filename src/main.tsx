import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound';
import "./main.css";
import LevelSelector from './pages/LevelSelector/LevelSelector.tsx';
import Story from './pages/Story/Story.tsx';
import Question from './pages/Question/Question.tsx';
import Congrats from './pages/Congrats/Congrats.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/level-selector" element={<LevelSelector />}></Route>
        <Route path="/story" element={<Story />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/congrats" element={<Congrats/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  </StrictMode>
)
