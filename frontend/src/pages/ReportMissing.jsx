import { useState, useRef } from "react"

export default function ReportMissing(){

  const [name,setName] = useState("")
  const [age,setAge] = useState("")
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

    // Show success message
    setSuccess(true)

    // Reset form fields
    setName("")
    setAge("")
    setDetails("")
    setPreview(null)

    // Reset file input element
    if(fileInputRef.current){
      fileInputRef.current.value = ""
    }

    // Hide success after few seconds
    setTimeout(()=>setSuccess(false),3000)

    // Smooth scroll to top
    window.scrollTo({ top:0, behavior:"smooth" })
  }

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT FORM */}
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

          <textarea
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            placeholder="Last seen details"
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

          <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl">
            Submit Case
          </button>

        </form>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6">

          <h2 className="text-xl font-semibold">
            Why Detailed Reports Matter
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Early reporting increases recovery success rate.</li>
            <li>✔ Accurate descriptions help volunteers identify faster.</li>
            <li>✔ AI matching improves with richer data.</li>
            <li>✔ More information enables faster admin verification.</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg font-medium">
            The first 24–48 hours are critical. Providing detailed information dramatically increases chances of locating missing persons.
          </div>

        </div>

      </div>
    </div>
  )
}