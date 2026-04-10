import { HashRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import PageWrapper from "./components/PageWrapper"

import Home from "./pages/Home"
import ReportMissing from "./pages/ReportMissing"
import ReportSighting from "./pages/ReportSighting"
import LiveMap from "./pages/LiveMap"
import Admin from "./pages/Admin"
import CaseDetails from "./pages/CaseDetails"

export default function App() {

  return (
    <HashRouter>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>

          <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
          <Route path="/report-missing" element={<PageWrapper><ReportMissing/></PageWrapper>} />
          <Route path="/report-sighting" element={<PageWrapper><ReportSighting/></PageWrapper>} />
          <Route path="/map" element={<PageWrapper><LiveMap/></PageWrapper>} />
          <Route path="/admin" element={<PageWrapper><Admin/></PageWrapper>} />
          <Route path="/case/:id" element={<PageWrapper><CaseDetails/></PageWrapper>} />

        </Routes>
      </AnimatePresence>
    </HashRouter>
  )
}
