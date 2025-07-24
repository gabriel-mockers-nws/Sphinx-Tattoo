import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import Header  from './components/Header'
import Home from './pages/Home'
import Rituals from './pages/rituals'
import Gallery from './pages/gallery'
import FAQ from './pages/faq'
import Contact from './pages/contact'
import Aftercare from './pages/aftercare'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      <Router>
        <div className="bg-yellow-300 text-black text-center py-2 px-4 font-bold">
          ERÖFFNUNG AM 13.09.2025
        </div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rituals' element={<Rituals />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/faq' element={<FAQ />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/aftercare' element={<Aftercare />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
  )
}

export default App
