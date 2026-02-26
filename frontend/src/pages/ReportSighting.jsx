import { useState } from "react"

export default function ReportSighting(){

  const [preview,setPreview]=useState(null)

  const handleImage=(e)=>{
    const file=e.target.files[0]
    if(file){
      setPreview(URL.createObjectURL(file))
    }
  }

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-green-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* FORM */}
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Report a Sighting
          </h1>

          <input className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-green-500"
            placeholder="Location where person was seen" />

          <textarea className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-green-500"
            placeholder="Describe what you observed (appearance, behavior, time)" />

          <div className="border-2 border-dashed rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Upload Image (Optional)</p>
            <input type="file" accept="image/*" onChange={handleImage} />
          </div>

          {preview && (
            <img src={preview}
              className="mt-4 rounded-xl max-h-60 w-full object-cover shadow" />
          )}

          <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold shadow hover:scale-[1.02] transition">
            Submit Sighting
          </button>

        </div>

        {/* AI EXPLANATION PANEL */}
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg space-y-6">

          <h2 className="text-xl font-semibold">
            How Your Report Helps
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ AI matches sightings with registered cases.</li>
            <li>✔ Image uploads increase facial and clothing pattern accuracy.</li>
            <li>✔ Admins receive real-time match alerts.</li>
            <li>✔ Faster reports mean higher recovery probability.</li>
          </ul>

          <div className="bg-green-50 p-4 rounded-lg font-medium">
            Even anonymous reports can make a life-saving difference.
          </div>

        </div>

      </div>
    </div>
  )
}