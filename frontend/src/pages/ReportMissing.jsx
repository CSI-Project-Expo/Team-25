import { useState, useRef, useContext } from "react"
import { CaseContext } from "../context/CaseContext"
import { useNavigate } from "react-router-dom"

export default function ReportMissing(){

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
  const [success,setSuccess] = useState(false)
  const [loading,setLoading] = useState(false)

  const fileInputRef = useRef(null)

  const handleImage = (e)=>{
    const file = e.target.files[0]
    if(file){
      setPreview(URL.createObjectURL(file))
    }
  }

  const geocodeAddress = async (fullAddress)=>{
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`
    )
    const data = await response.json()
    if(data.length === 0) return null
    return [parseFloat(data[0].lat), parseFloat(data[0].lon)]
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(!name || !city || !state || !zip){
      alert("Please complete required address fields.")
      return
    }

    setLoading(true)

    const fullAddress = `${apartment}, ${city}, ${state}, ${zip}, India`
    const coordinates = await geocodeAddress(fullAddress)

    if(!coordinates){
      alert("Unable to locate this address.")
      setLoading(false)
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

    setSuccess(true)

    setName("")
    setAge("")
    setApartment("")
    setCity("")
    setState("")
    setZip("")
    setDetails("")
    setPreview(null)

    if(fileInputRef.current){
      fileInputRef.current.value=""
    }

    setLoading(false)

    setTimeout(()=>{
      setSuccess(false)
      navigate("/admin")
    },1500)
  }

  return(
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* FORM */}
        <form onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-6">
            Register Missing Person
          </h1>

          {success && (
            <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg">
              Case submitted successfully.
            </div>
          )}

          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Full Name"
          />

          <input
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Age"
          />

          <input
            value={apartment}
            onChange={(e)=>setApartment(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Apartment / Building"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="border p-3 rounded"
              placeholder="City"
            />
            <input
              value={state}
              onChange={(e)=>setState(e.target.value)}
              className="border p-3 rounded"
              placeholder="State"
            />
          </div>

          <input
            value={zip}
            onChange={(e)=>setZip(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="ZIP Code"
          />

          <textarea
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Incident Details"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <img
              src={preview}
              className="mt-4 rounded-xl max-h-60 w-full object-cover"
            />
          )}

          <button
            disabled={loading}
            className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl disabled:opacity-60"
          >
            {loading ? "Locating Address..." : "Submit Case"}
          </button>

        </form>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6">

          <h2 className="text-2xl font-semibold">
            Why Detailed Reports Matter
          </h2>

          <p className="text-gray-600">
            The first 24–48 hours are critical in locating a missing person.
            Structured data increases recovery probability.
          </p>

          <div className="space-y-4">

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-semibold">📍 Precise Mapping</h3>
              <p className="text-sm text-gray-600">
                Structured address automatically pins location on the live map.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="font-semibold">🤖 AI Cross Matching</h3>
              <p className="text-sm text-gray-600">
                Sightings are evaluated against case profiles using AI scoring.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-semibold">🛡 Community Visibility</h3>
              <p className="text-sm text-gray-600">
                Cases appear on public map for rapid collective action.
              </p>
            </div>

          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-sm text-gray-600">
            More detailed reports = stronger AI confidence scores.
          </div>

        </div>

      </div>
    </div>
  )
}