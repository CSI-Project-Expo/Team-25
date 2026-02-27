import { useState, useRef, useContext } from "react"
import { CaseContext } from "../context/CaseContext"

export default function ReportSighting(){

  const { addSighting } = useContext(CaseContext)

  const [location,setLocation] = useState("")
  const [details,setDetails] = useState("")
  const [preview,setPreview] = useState(null)
  const [success,setSuccess] = useState(false)

  const fileInputRef = useRef(null)

  const handleImage = (e)=>{
    const file = e.target.files[0]
    if(file){
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    addSighting({
      location,
      details,
      image: preview
    })

    setSuccess(true)
    setLocation("")
    setDetails("")
    setPreview(null)

    if(fileInputRef.current){
      fileInputRef.current.value=""
    }

    setTimeout(()=>setSuccess(false),2000)
  }

  return(
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-green-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* FORM */}
        <form onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-6">
            Report a Sighting
          </h1>

          {success && (
            <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg">
              Sighting submitted. AI analysis updated.
            </div>
          )}

          <input
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Location of sighting"
          />

          <textarea
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Details of sighting"
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

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl">
            Submit Sighting
          </button>

        </form>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6">

          <h2 className="text-2xl font-semibold">
            Your Observation Can Save a Life
          </h2>

          <p className="text-gray-600">
            Even small details can trigger high-confidence AI matches.
          </p>

          <div className="space-y-4">

            <div className="bg-yellow-50 p-4 rounded-xl">
              <h3 className="font-semibold">👁 Real-Time AI Analysis</h3>
              <p className="text-sm text-gray-600">
                Sightings are instantly evaluated against active cases.
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-xl">
              <h3 className="font-semibold">📷 Image Boost</h3>
              <p className="text-sm text-gray-600">
                Uploaded photos increase match confidence scoring.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-xl">
              <h3 className="font-semibold">🔐 Anonymous & Secure</h3>
              <p className="text-sm text-gray-600">
                No personal data required to submit a sighting.
              </p>
            </div>

          </div>

          <div className="bg-gray-100 p-4 rounded-xl text-sm text-gray-600">
            Reports automatically update AI confidence in Admin dashboard.
          </div>

        </div>

      </div>
    </div>
  )
}