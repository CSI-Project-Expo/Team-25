import { useState } from "react"

export default function ReportMissing(){

  const [preview,setPreview] = useState(null)

  const handleImage = (e)=>{
    const file = e.target.files[0]
    if(file){
      setPreview(URL.createObjectURL(file))
    }
  }

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* FORM SECTION */}
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Register Missing Person
          </h1>

          <div className="space-y-4">

            <input className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name" />

            <input className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Age" />

            <textarea className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Last seen location, clothing, physical description" />

            <div className="border-2 border-dashed rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Upload Photo (Strongly Recommended)
              </p>
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>

            {preview && (
              <img src={preview}
                className="mt-4 rounded-xl max-h-60 w-full object-cover shadow" />
            )}

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow hover:scale-[1.02] active:scale-[0.98] transition">
              Submit Case
            </button>

          </div>
        </div>

        {/* INFO PANEL */}
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg space-y-5">

          <h2 className="text-xl font-semibold">
            Why Adding a Photo Matters
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Improves AI facial recognition accuracy.</li>
            <li>✔ Helps volunteers identify faster.</li>
            <li>✔ Increases match probability in first 48 hours.</li>
            <li>✔ Speeds up verification by administrators.</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg font-medium">
            The first 24–48 hours are critical. A clear photo can significantly increase recovery chances.
          </div>

        </div>

      </div>
    </div>
  )
}