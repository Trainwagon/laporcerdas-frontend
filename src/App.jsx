import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CrosscheckLaporan from './pages/CrosscheckLaporan'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crosscheck" element={<CrosscheckLaporan />} />
      </Routes>
    </Router>
  )
}

export default App
