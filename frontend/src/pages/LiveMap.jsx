import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useState } from "react"
import L from "leaflet"

const activeIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
})

const foundIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32],
})

const cases = [
  {
    id: 1,
    name: "Rohan Sharma",
    status: "active",
    position: [28.6139, 77.2090],
    missingDate: "12 Feb 2026",
    lastSeen: "Delhi",
    updates: "Search ongoing."
  },
  {
    id: 2,
    name: "Meena Iyer",
    status: "found",
    position: [19.0760, 72.8777],
    foundDate: "2 Jan 2026",
    foundLocation: "Mumbai",
    recoveryTime: "3 days"
  }
]

export default function LiveMap() {

  const [filter, setFilter] = useState("all")

  const filteredCases =
    filter === "all"
      ? cases
      : cases.filter(c => c.status === filter)

  return (
    <div className="min-h-screen pt-28 px-8 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Live Case Map – India
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          <button onClick={() => setFilter("all")} className="px-4 py-2 bg-black text-white rounded-lg">All</button>
          <button onClick={() => setFilter("active")} className="px-4 py-2 bg-red-500 text-white rounded-lg">Active</button>
          <button onClick={() => setFilter("found")} className="px-4 py-2 bg-green-600 text-white rounded-lg">Found</button>
        </div>

        <MapContainer
          center={[22.9734, 78.6569]}
          zoom={5}
          style={{ height: "600px", borderRadius: "20px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredCases.map((c) => (
            <Marker
              key={c.id}
              position={c.position}
              icon={c.status === "active" ? activeIcon : foundIcon}
            >
              <Popup>
                <h2 className="font-bold">{c.name}</h2>
                {c.status === "active" ? (
                  <>
                    <p><strong>Missing:</strong> {c.missingDate}</p>
                    <p><strong>Last Seen:</strong> {c.lastSeen}</p>
                    <p>{c.updates}</p>
                  </>
                ) : (
                  <>
                    <p><strong>Found At:</strong> {c.foundLocation}</p>
                    <p><strong>Date:</strong> {c.foundDate}</p>
                    <p><strong>Recovery Time:</strong> {c.recoveryTime}</p>
                  </>
                )}
              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>
    </div>
  )
}