import { useState } from 'react'
import './css/App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from "./pages/Favorites.jsx"
import Navbar from './pages/Navbar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
    
      <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>} />
        { <Route path="/favorites" element={<Favorites/>} /> }
      </Routes>
    </main>
    
    </MovieProvider>
  )
}

export default App
