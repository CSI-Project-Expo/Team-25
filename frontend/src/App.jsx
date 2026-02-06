import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import img1 from "./assets/image1.png"
import img2 from "./assets/image2.png"
import img3 from "./assets/image3.png"

export default function App() {

  const images = [img1, img2, img3]
  const [index, setIndex] = useState(0)

  // slideshow auto-change
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

      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between items-center p-6 text-white z-10 backdrop-blur-md bg-black/20">

        <h1 className="font-bold text-xl tracking-wide">
          MissingLink
        </h1>

        <div className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Report Missing</Button>
          <Button variant="ghost">Sightings</Button>
          <Button variant="ghost">Admin</Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h2 className="text-5xl font-bold max-w-3xl leading-tight">
          Reuniting Families. Restoring Hope.
        </h2>

        <p className="mt-6 text-lg max-w-xl text-gray-200">
          MissingLink helps families register missing persons and enables citizens
          to report sightings anonymously — improving the critical first 24–48 hour response.
        </p>

        <div className="mt-10 space-x-4">

          <Button size="lg">
            Report Missing Person
          </Button>

          {/* FIXED BUTTON */}
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            Report a Sighting
          </Button>

        </div>

      </div>

    </div>
  )
}