import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import ReportMissing from "./pages/ReportMissing"
import ReportSighting from "./pages/ReportSighting"
import LiveMap from "./pages/LiveMap"
import Admin from "./pages/Admin"

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-missing" element={<ReportMissing />} />
        <Route path="/report-sighting" element={<ReportSighting />} />
        <Route path="/map" element={<LiveMap />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}