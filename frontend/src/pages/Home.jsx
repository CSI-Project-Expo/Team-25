import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"

export default function Home() {

  const images = [img1, img2, img3]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl font-bold max-w-3xl leading-tight">
          Reuniting Families. Restoring Hope.
        </h1>

        <p className="mt-6 text-lg max-w-xl text-gray-200">
          Community-powered missing persons coordination platform.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            to="/report-missing"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Report Missing
          </Link>

          <Link
            to="/report-sighting"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Report Sighting
          </Link>

        </div>

      </div>
    </div>
  )
}