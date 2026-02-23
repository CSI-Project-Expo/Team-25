import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center p-6 backdrop-blur-md bg-black/30 text-white z-50">
      <h1 className="font-bold text-xl">MissingLink</h1>

      <div className="space-x-3">
        <Link to="/"><Button variant="ghost">Home</Button></Link>
        <Link to="/report-missing"><Button variant="ghost">Report Missing</Button></Link>
        <Link to="/report-sighting"><Button variant="ghost">Sightings</Button></Link>
        <Link to="/map"><Button variant="ghost">Live Map</Button></Link>
        <Link to="/admin"><Button variant="ghost">Admin</Button></Link>
      </div>
    </div>
  )
}