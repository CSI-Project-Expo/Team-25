import { useState, useContext } from "react"
import { CaseContext } from "../context/CaseContext"

export default function ReportSighting() {
  const { addSighting } = useContext(CaseContext)

  const [location, setLocation] = useState("")
  const [details, setDetails] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    addSighting({
      location,
      details,
      image
    })

    setLocation("")
    setDetails("")
    setImage(null)

    alert("Sighting submitted!")
  }

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">Report Sighting</h1>

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location seen"
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded">
            Submit Sighting
          </button>
        </form>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Why reporting sightings matters
          </h2>

          <ul className="text-gray-600 space-y-3">
            <li>✔ Helps track movement patterns</li>
            <li>✔ Improves AI match confidence</li>
            <li>✔ Speeds up recovery time</li>
            <li>✔ Provides real-time community input</li>
          </ul>

          <div className="mt-6 bg-blue-100 p-4 rounded">
            Even small details can make a big difference in finding someone.
          </div>
        </div>

      </div>
    </div>
  )
}