import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import ReportMissing from "./pages/ReportMissing"
import ReportSighting from "./pages/ReportSighting"
import Admin from "./pages/Admin"
import LiveMap from "./pages/LiveMap"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-missing" element={<ReportMissing />} />
        <Route path="/report-sighting" element={<ReportSighting />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/map" element={<LiveMap />} />
      </Routes>
    </BrowserRouter>
  )
}