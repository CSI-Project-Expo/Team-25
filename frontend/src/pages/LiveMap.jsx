import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useContext, useState } from "react"
import { CaseContext } from "../context/CaseContext"

export default function LiveMap() {
  const { cases } = useContext(CaseContext)
  const [filter, setFilter] = useState("all")

  // ✅ FILTER LOGIC
  const filteredCases = cases.filter(c => {
    if (filter === "ongoing") return c.status === "ongoing"
    if (filter === "found") return c.status === "found"
    return true
  })

  return (
    <div className="pt-24 px-6 bg-gray-50 min-h-screen">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-4">Live Case Map</h1>

      {/* ✅ FILTER BUTTONS (FIXED UI) */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("ongoing")}
          className={`px-4 py-2 rounded ${
            filter === "ongoing" ? "bg-yellow-500 text-white" : "bg-yellow-200"
          }`}
        >
          Ongoing
        </button>

        <button
          onClick={() => setFilter("found")}
          className={`px-4 py-2 rounded ${
            filter === "found" ? "bg-green-600 text-white" : "bg-green-200"
          }`}
        >
          Found
        </button>
      </div>

      {/* ✅ MAP CONTAINER (NOT FULLSCREEN) */}
      <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg">

        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={12}
          className="h-full w-full"
        >

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* ✅ MARKERS */}
          {filteredCases.map(c => (
            c.position && (
              <Marker key={c.id} position={c.position}>
                <Popup>

                  <div className="text-sm">
                    <b className="text-base">{c.name}</b><br />

                    📍 <b>Last Seen:</b> {c.address}<br />
                    🎯 <b>Status:</b> {c.status}<br />
                    🤖 <b>AI Score:</b> {c.aiScore}%<br />

                    <hr className="my-2"/>

                    <b>Latest Evidence:</b><br />

                    {c.matches.length === 0 ? (
                      <span>No sightings yet</span>
                    ) : (
                      <div>
                        📍 {c.matches[c.matches.length - 1].location}<br />
                        🔍 {c.matches[c.matches.length - 1].similarity}% match
                      </div>
                    )}

                  </div>

                </Popup>
              </Marker>
            )
          ))}

        </MapContainer>

      </div>
    </div>
  )
}