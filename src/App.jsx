import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CrosscheckLaporan from "./pages/CrosscheckLaporan";
import RekapitulasiLaporan from "./pages/RekapitulasiLaporan";
import Login from "./pages/Login";
import TrackingPage from "./pages/TrackingPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <Routes>
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/laporan" element={<ReportPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/crosscheck" element={<CrosscheckLaporan />} />
      <Route path="/rekapitulasi" element={<RekapitulasiLaporan />} />
    </Routes>
  );
}

export default App;
