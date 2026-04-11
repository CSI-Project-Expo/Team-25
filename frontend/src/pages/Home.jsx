import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

export default function Home(){

  const images=[image1,image2,image3]
  const [current,setCurrent]=useState(0)

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrent(p=>(p+1)%images.length)
    },5000)
    return()=>clearInterval(interval)
  },[])

  return(
    <div className="relative min-h-screen overflow-hidden">

      {images.map((img,i)=>(
        <img key={i} src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i===current?"opacity-100":"opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 pt-20">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Reuniting Families. Restoring Hope.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link to="/report-missing"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-xl">
            Report Missing
          </Link>

          <Link to="/report-sighting"
            className="bg-white text-black px-6 py-3 rounded-xl">
            Report Sighting
          </Link>

        </div>

      </div>
    </div>
  )
}