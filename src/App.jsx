import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white">
        <BrowserRouter>
          {/* Pass darkMode state to Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
