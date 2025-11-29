import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CrosscheckLaporan from './pages/CrosscheckLaporan'
import RekapitulasiLaporan from './pages/RekapitulasiLaporan'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crosscheck" element={<CrosscheckLaporan />} />
        <Route path="/rekapitulasi" element={<RekapitulasiLaporan />} />
      </Routes>
    </Router>
  )
}

export default App
