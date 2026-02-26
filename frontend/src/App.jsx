import { Routes, Route, useLocation } from "react-router-dom"
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

  const location = useLocation()

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
          <Route path="/report-missing" element={<PageWrapper><ReportMissing/></PageWrapper>} />
          <Route path="/report-sighting" element={<PageWrapper><ReportSighting/></PageWrapper>} />
          <Route path="/map" element={<PageWrapper><LiveMap/></PageWrapper>} />
          <Route path="/admin" element={<PageWrapper><Admin/></PageWrapper>} />
          <Route path="/case/:id" element={<PageWrapper><CaseDetails/></PageWrapper>} />

        </Routes>
      </AnimatePresence>
    </>
  )
}