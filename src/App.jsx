import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Work from './pages/WorkPage';
import Play from './pages/PlayPage';
import About from './pages/AboutPage';
import Menu from './components/Menu';
import VectorCam from './pages/VectorCam'
import Navbar from './components/Navbar';
import Preloader from './components/Preloader'

function App() {

  return (
    <>
      <div className="p-1 h-screen">
        <Router>
          {/* <div className="w-full rounded-t-3xl bg-[#EFEFEF]">
          <Menu />
        </div> */}

          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
            <Route path="/vectorcam" element={<VectorCam />} />
          </Routes>
        </Router>
      </div>
      <Preloader />
    </>
  )
}

export default App