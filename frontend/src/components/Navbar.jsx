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

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:opacity-80 transition"
        >
          MissingLink
        </Link>

        {/* Navigation */}
        <div className="flex gap-8">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative group font-medium transition"
              >
                {link.name}

                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 scale-x-100"
                      : "bg-blue-500 scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                />
              </Link>
            )
          })}

        </div>
      </div>
    </div>
  )
}