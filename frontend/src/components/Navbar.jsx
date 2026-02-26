import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {

  const location = useLocation()
  const [open,setOpen] = useState(false)

  const links = [
    { name:"Home", path:"/" },
    { name:"Report Missing", path:"/report-missing" },
    { name:"Sightings", path:"/report-sighting" },
    { name:"Live Map", path:"/map" },
    { name:"Admin", path:"/admin" }
  ]

  return(
    <motion.div
      initial={{ y:-80 }}
      animate={{ y:0 }}
      className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        <Link to="/" className="font-bold text-lg">
          📍 MissingLink
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map(l=>(
            <Link key={l.path} to={l.path}
              className={`hover:text-blue-600 transition ${
                location.pathname===l.path?"font-semibold":""
              }`}>
              {l.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map(l=>(
            <Link key={l.path} to={l.path} onClick={()=>setOpen(false)}>
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  )
}