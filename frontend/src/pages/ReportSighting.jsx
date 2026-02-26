import { useState, useRef } from "react"

export default function ReportSighting(){

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

    setSuccess(true)

    setLocation("")
    setDetails("")
    setPreview(null)

    if(fileInputRef.current){
      fileInputRef.current.value = ""
    }

    setTimeout(()=>setSuccess(false),3000)

    window.scrollTo({ top:0, behavior:"smooth" })
  }

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-green-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* FORM */}
        <form onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-6">
            Report a Sighting
          </h1>

          {success && (
            <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg">
              Sighting submitted successfully.
            </div>
          )}

          <input
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Location seen"
          />

          <textarea
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Details"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <img src={preview} className="mt-4 rounded-xl max-h-60 w-full object-cover"/>
          )}

          <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl">
            Submit Sighting
          </button>

        </form>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6">

          <h2 className="text-xl font-semibold">
            How Your Report Helps
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ AI compares sightings with registered missing cases.</li>
            <li>✔ Images improve facial and clothing recognition.</li>
            <li>✔ Admins receive real-time alerts.</li>
            <li>✔ Faster reporting increases recovery probability.</li>
          </ul>

          <div className="bg-green-50 p-4 rounded-lg font-medium">
            Even anonymous sightings can save lives.
          </div>

        </div>

      </div>
    </div>
  )
}