import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          MissingLink
        </h1>

        {/* Navigation */}
        <div className="flex gap-3">

          <Link to="/">
            <Button variant="ghost" className="hover:bg-white/10">
              Home
            </Button>
          </Link>

          <Link to="/report-missing">
            <Button variant="ghost" className="hover:bg-white/10">
              Report Missing
            </Button>
          </Link>

          <Link to="/report-sighting">
            <Button variant="ghost" className="hover:bg-white/10">
              Sightings
            </Button>
          </Link>

          <Link to="/map">
            <Button variant="ghost" className="hover:bg-white/10">
              Live Map
            </Button>
          </Link>

          <Link to="/admin">
            <Button variant="ghost" className="hover:bg-white/10">
              Admin
            </Button>
          </Link>

        </div>

      </div>

    </div>
  )
}