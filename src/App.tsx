import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Landing } from './pages/Landing'
import { Nav } from './components/nav/Nav'

function App() {
  return (
  <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App
