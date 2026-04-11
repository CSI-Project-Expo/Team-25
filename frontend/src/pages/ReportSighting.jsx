import { useState, useContext } from "react"
import { CaseContext } from "../context/CaseContext"

export default function ReportSighting(){

  const { addSighting } = useContext(CaseContext)

  const [location,setLocation] = useState("")
  const [details,setDetails] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    addSighting({
      location,
      details
    })

    setLocation("")
    setDetails("")

    alert("Sighting submitted successfully!")
  }

  return(
    <div className="min-h-screen pt-24 px-4 bg-gray-50">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6">
          Report Sighting
        </h1>

        <form onSubmit={handleSubmit}>

          <input value={location}
            onChange={(e)=>setLocation(e.target.value)}
            placeholder="Location where seen"
            className="w-full border p-3 rounded mb-4"
          />

          <textarea value={details}
            onChange={(e)=>setDetails(e.target.value)}
            placeholder="Additional details"
            className="w-full border p-3 rounded mb-4"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Submit Sighting
          </button>

        </form>

      </div>

    </div>
  )
}