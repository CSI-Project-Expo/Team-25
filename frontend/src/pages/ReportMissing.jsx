import { useState, useRef, useContext } from "react"
import { CaseContext } from "../context/CaseContext"
import { useNavigate } from "react-router-dom"

export default function ReportMissing(){

  console.log("🔥 NEW REPORT MISSING VERSION LOADED")

  const { addCase } = useContext(CaseContext)
  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [apartment,setApartment] = useState("")
  const [city,setCity] = useState("")
  const [state,setState] = useState("")
  const [zip,setZip] = useState("")
  const [details,setDetails] = useState("")
  const [preview,setPreview] = useState(null)

  const fileInputRef = useRef(null)

  const handleImage = (e)=>{
    const file = e.target.files[0]
    if(file){
      setPreview(URL.createObjectURL(file))
    }
  }

  const geocodeAddress = async (address)=>{
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    )
    const data = await res.json()

    if(data.length === 0) return null

    return [parseFloat(data[0].lat), parseFloat(data[0].lon)]
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const fullAddress = `${apartment}, ${city}, ${state}, ${zip}, India`

    const coordinates = await geocodeAddress(fullAddress)

    if(!coordinates){
      alert("Invalid address. Try again.")
      return
    }

    addCase({
      name,
      age,
      address: fullAddress,
      details,
      image: preview,
      position: coordinates
    })

    navigate("/admin")
  }

  return(
    <div className="min-h-screen pt-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <form onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">
            Report Missing Person
          </h1>

          <input value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
          />

          <input value={age}
            onChange={(e)=>setAge(e.target.value)}
            placeholder="Age"
            className="w-full border p-3 rounded mb-4"
          />

          <input value={apartment}
            onChange={(e)=>setApartment(e.target.value)}
            placeholder="Apartment / Building"
            className="w-full border p-3 rounded mb-4"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input value={city}
              onChange={(e)=>setCity(e.target.value)}
              placeholder="City"
              className="border p-3 rounded"
            />
            <input value={state}
              onChange={(e)=>setState(e.target.value)}
              placeholder="State"
              className="border p-3 rounded"
            />
          </div>

          <input value={zip}
            onChange={(e)=>setZip(e.target.value)}
            placeholder="ZIP Code"
            className="w-full border p-3 rounded mb-4"
          />

          <textarea value={details}
            onChange={(e)=>setDetails(e.target.value)}
            placeholder="Details"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <img src={preview}
              className="mt-4 rounded max-h-60 w-full object-cover"/>
          )}

          <button className="w-full mt-6 bg-red-600 text-white py-3 rounded">
            Submit
          </button>

        </form>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Why this matters
          </h2>
          <p className="text-gray-600">
            Accurate location helps plot the last known position
            and improves AI matching for faster recovery.
          </p>
        </div>

      </div>
    </div>
  )
}