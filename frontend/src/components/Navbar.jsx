import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
        location.pathname === path
          ? "bg-black text-white"
          : isHome
            ? "text-white hover:bg-white/20"
            : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  )

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? "bg-black/30 backdrop-blur-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          {/* Location Marker Logo */}
          <div className="relative w-8 h-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8"
            >
              <path
                d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
                fill="url(#grad)"
              />
              <circle cx="12" cy="10" r="3" fill="white" />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="24" y2="24">
                  <stop stopColor="#2563eb" />
                  <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <span
            className={`font-semibold text-lg tracking-wide ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            MissingLink
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-4 items-center">

          {navLink("/", "Home")}
          {navLink("/report-missing", "Report Missing")}
          {navLink("/report-sighting", "Report Sighting")}
          {navLink("/map", "Live Map")}
          {navLink("/admin", "Admin")}

        </div>

      </div>
    </nav>
  )
}