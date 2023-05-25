
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Line from './components/Line/Line'
import './index.css'

function App() {

  return (
    <div className=' w-full min-h-screen bg-[#091A29] scroll-smooth'>
      <Home />
      <Line />
      <About />
      <Footer />
    </div>
  )
}

export default App
