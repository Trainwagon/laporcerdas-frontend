import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CrosscheckLaporan from './pages/CrosscheckLaporan'
import RekapitulasiLaporan from './pages/RekapitulasiLaporan'
import Login from './pages/Login'
import TrackingPage from './pages/TrackingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/crosscheck" element={<CrosscheckLaporan />} />
        <Route path="/rekapitulasi" element={<RekapitulasiLaporan />} />
      </Routes>
    </Router>
  )
}

export default App
