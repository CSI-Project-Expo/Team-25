import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"

export default function Home() {

  const images = [img1, img2, img3]
  const [index, setIndex] = useState(0)

  // Background slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background slideshow */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl font-bold max-w-3xl leading-tight">
          Reuniting Families. Restoring Hope.
        </h1>

        <p className="mt-6 text-lg max-w-xl text-gray-200">
          Every minute matters. Help bring someone home.
        </p>

        {/* Working Navigation Buttons */}
        <div className="mt-10 flex gap-4">

          <Link to="/report-missing">
            <Button size="lg">
              Report Missing Person
            </Button>
          </Link>

          <Link to="/report-sighting">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
            >
              Report a Sighting
            </Button>
          </Link>

        </div>

      </div>

    </div>
  )
}