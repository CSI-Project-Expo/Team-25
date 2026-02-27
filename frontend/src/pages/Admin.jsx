import { useContext } from "react"
import { CaseContext } from "../context/CaseContext"
import { Link } from "react-router-dom"

export default function Admin(){

  const { cases } = useContext(CaseContext)

  if(!cases || cases.length === 0){
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <h2 className="text-xl text-gray-500">
          No active cases available.
        </h2>
      </div>
    )
  }

  return(
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Admin Intelligence Dashboard
        </h1>

        <div className="grid gap-6">

          {cases.map(c=>{

            const aiScore = c.aiScore ?? 0
            const matches = c.matches ?? []

            return(
              <div
                key={c.id}
                className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
              >

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

                  <div>
                    <h2 className="text-xl font-semibold">
                      {c.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Last Seen: {c.address}
                    </p>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    c.status==="active"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}>
                    {c.status?.toUpperCase()}
                  </span>

                </div>

                {/* AI MATCH BAR */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI Match Confidence</span>
                    <span>{aiScore}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${aiScore}%` }}
                    />
                  </div>
                </div>

                {/* POSSIBLE MATCHES */}
                <div>
                  <h3 className="font-medium mb-2">
                    Possible Matches Identified
                  </h3>

                  {matches.length === 0 ? (
                    <p className="text-gray-400 text-sm">
                      No matches reported yet.
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {matches.map(m=>(
                        <li
                          key={m.id}
                          className="bg-gray-50 p-3 rounded-lg text-sm"
                        >
                          <div className="flex justify-between">
                            <span>{m.location}</span>
                            <span className="text-blue-600 font-medium">
                              {m.similarity}% match
                            </span>
                          </div>
                          <p className="text-gray-500 mt-1">
                            {m.notes}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="text-right">
                  <Link
                    to={`/case/${c.id}`}
                    className="inline-block px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                  >
                    View Case
                  </Link>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}