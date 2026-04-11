import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CaseContext } from "../context/CaseContext"

export default function CaseDetails(){

  const { id } = useParams()
  const { cases } = useContext(CaseContext)

  const caseData = cases.find(c=>c.id===parseInt(id))

  if(!caseData) return <div className="pt-24 text-center">Case not found</div>

  return(
    <div className="min-h-screen pt-24 px-4 bg-gray-50">

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-4">
          {caseData.name}
        </h1>

        {caseData.image && (
          <img
            src={caseData.image}
            className="max-h-80 rounded-xl mb-4"
          />
        )}

        <p><strong>Age:</strong> {caseData.age}</p>
        <p><strong>Last Seen Address:</strong> {caseData.address}</p>
        <p><strong>Details:</strong> {caseData.details}</p>

      </div>
    </div>
  )
}