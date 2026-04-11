import { useContext } from "react"
import { CaseContext } from "../context/CaseContext"

export default function Admin() {
  const { cases } = useContext(CaseContext)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {cases.map(c => (
        <div key={c.id} className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl font-semibold">{c.name}</h2>
          <p>Age: {c.age}</p>
          <p>Last Seen: {c.address}</p>

          {/* AI BAR */}
          <div className="mt-3">
            <div className="bg-gray-200 h-4 rounded">
              <div
                className="bg-green-500 h-4 rounded"
                style={{ width: `${c.aiScore}%` }}
              />
            </div>
            <p className="text-sm mt-1">
              AI Confidence: {c.aiScore}%
            </p>
          </div>

          {/* AI EXPLANATION */}
          <div className="mt-3 text-sm text-gray-600">
            AI score increases based on:
            <ul className="list-disc ml-5">
              <li>Facial similarity</li>
              <li>Location proximity</li>
              <li>Repeated sightings</li>
            </ul>
          </div>

          {/* EVIDENCE */}
          <div className="mt-4">
            <h3 className="font-semibold">Sightings / Evidence</h3>

            {c.matches.length === 0 ? (
              <p className="text-gray-500 text-sm">No sightings yet</p>
            ) : (
              c.matches.map(m => (
                <div key={m.id} className="text-sm mt-2 border p-2 rounded">
                  📍 {m.location} ({m.similarity}% match)
                  <p>{m.notes}</p>
                </div>
              ))
            )}
          </div>

        </div>
      ))}
    </div>
  )
}