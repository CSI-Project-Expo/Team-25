import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useContext, useState } from "react"
import { CaseContext } from "../context/CaseContext"
import L from "leaflet"

const activeIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32]
})

const foundIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32]
})

export default function LiveMap(){

  const { cases } = useContext(CaseContext)
  const [filter,setFilter] = useState("all")

  const filteredCases = filter === "all"
    ? cases
    : cases.filter(c => c.status === filter)

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Live Missing Persons Map
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">

          <button
            onClick={()=>setFilter("all")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              filter==="all"
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All Cases
          </button>

          <button
            onClick={()=>setFilter("active")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              filter==="active"
                ? "bg-red-600 text-white"
                : "bg-red-100 hover:bg-red-200"
            }`}
          >
            Active
          </button>

          <button
            onClick={()=>setFilter("found")}
            className={`px-4 py-2 rounded-xl font-medium transition ${
              filter==="found"
                ? "bg-green-600 text-white"
                : "bg-green-100 hover:bg-green-200"
            }`}
          >
            Found
          </button>

        </div>

        {/* MAP CONTAINER */}
        <div className="rounded-2xl overflow-hidden shadow-xl">

          <MapContainer
            center={[22.9734, 78.6569]}   // Center of India
            zoom={5}
            scrollWheelZoom={true}
            style={{ height: "65vh", width: "100%" }}
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* DYNAMIC CASE MARKERS */}
            {filteredCases.map((c)=>(
              <Marker
                key={c.id}
                position={c.position}
                icon={c.status === "found" ? foundIcon : activeIcon}
              >
                <Popup>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">
                      {c.name}
                    </h3>

                    {c.image && (
                      <img
                        src={c.image}
                        alt="case"
                        className="rounded-lg max-h-40 w-full object-cover"
                      />
                    )}

                    <p><strong>Age:</strong> {c.age}</p>
                    <p><strong>Status:</strong> {c.status}</p>
                    <p><strong>Last Seen:</strong> {c.address}</p>
                    <p className="text-sm text-gray-600">
                      {c.details}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

      </div>
    </div>
  )
}