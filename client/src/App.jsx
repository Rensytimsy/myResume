import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Router,Routes, Route, Link } from 'react-router-dom'
import NavBar from './navbar.jsx'
import Projects from "./projects.jsx"
import MainPage from "./mainPage.jsx"
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  )
}

export default App
