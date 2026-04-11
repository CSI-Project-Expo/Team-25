import { useState, useRef, useContext } from "react"
import { CaseContext } from "../context/CaseContext"
import { useNavigate } from "react-router-dom"

export default function ReportMissing() {

  const { addCase } = useContext(CaseContext)
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [apartment, setApartment] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [details, setDetails] = useState("")
  const [preview, setPreview] = useState(null)

  const fileInputRef = useRef(null)

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  // 🔥 Convert address → coordinates
  const geocodeAddress = async (address) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      )
      const data = await res.json()

      if (data.length === 0) return null

      return [
        parseFloat(data[0].lat),
        parseFloat(data[0].lon)
      ]
    } catch (err) {
      console.error(err)
      return null
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !age || !city || !state || !zip) {
      alert("Please fill all required fields")
      return
    }

    const fullAddress = `${apartment}, ${city}, ${state}, ${zip}, India`

    const coordinates = await geocodeAddress(fullAddress)

    if (!coordinates) {
      alert("Could not find location. Try a clearer address.")
      return
    }

    addCase({
      name,
      age,
      address: fullAddress,
      details,
      image: preview,
      position: coordinates // 🔥 CRITICAL FOR MAP
    })

    // reset form
    setName("")
    setAge("")
    setApartment("")
    setCity("")
    setState("")
    setZip("")
    setDetails("")
    setPreview(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }

    navigate("/admin")
  }

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow"
        >

          <h1 className="text-2xl font-bold mb-6">
            Report Missing Person (NEW)
          </h1>

          {/* NAME */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
          />

          {/* AGE */}
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="w-full border p-3 rounded mb-4"
          />

          {/* APARTMENT */}
          <input
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            placeholder="Apartment / Building"
            className="w-full border p-3 rounded mb-4"
          />

          {/* CITY + STATE */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="border p-3 rounded"
            />

            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              className="border p-3 rounded"
            />
          </div>

          {/* ZIP */}
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="ZIP Code"
            className="w-full border p-3 rounded mb-4"
          />

          {/* DETAILS */}
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Additional Details"
            className="w-full border p-3 rounded mb-4"
          />

          {/* IMAGE */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <img
              src={preview}
              className="mt-4 rounded max-h-60 w-full object-cover"
            />
          )}

          {/* SUBMIT */}
          <button className="w-full mt-6 bg-red-600 text-white py-3 rounded hover:bg-red-700 transition">
            Submit Case
          </button>

        </form>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-4">
            Why Detailed Reports Matter
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Early reporting increases recovery success rate</li>
            <li>✔ Accurate location improves search efficiency</li>
            <li>✔ AI matching improves with richer data</li>
            <li>✔ Helps authorities respond faster</li>
          </ul>

          <div className="mt-6 p-4 bg-gray-100 rounded">
            <p>
              The first 24–48 hours are critical. Providing accurate
              location details significantly improves chances of recovery.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}