import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Report Missing", path: "/report-missing" },
    { name: "Sightings", path: "/report-sighting" },
    { name: "Live Map", path: "/map" },
    { name: "Admin", path: "/admin" },
  ]

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C12 22 4 14.5 4 9A8 8 0 1 1 20 9C20 14.5 12 22 12 22Z" fill="#2563eb"/>
            <circle cx="12" cy="9" r="3" fill="white"/>
            <circle cx="9" cy="10" r="1" fill="#2563eb"/>
            <circle cx="15" cy="10" r="1" fill="#2563eb"/>
          </svg>
          <span className="text-xl font-bold tracking-wide">
            MissingLink
          </span>
        </Link>

        <div className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative group font-medium"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 transition-transform duration-300 origin-left ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}