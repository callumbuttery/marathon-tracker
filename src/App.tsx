import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Landing } from './pages/Landing'
import { Training } from './pages/Training'
import { PastEvents } from './pages/PastEvents'
import { Nav } from './components/nav/Nav'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  //init animation package
  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, [])

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/past-events" element={<PastEvents />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
