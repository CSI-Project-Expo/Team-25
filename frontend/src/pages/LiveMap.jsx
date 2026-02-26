import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useState } from "react"
import L from "leaflet"

const activeIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32,32]
})

const foundIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32,32]
})

const cases = [
  {
    id:1,
    name:"Rohan Sharma",
    status:"active",
    position:[28.6,77.2],
    info:"Missing since Jan 10. Last seen in Delhi."
  },
  {
    id:2,
    name:"Meena Iyer",
    status:"found",
    position:[19.07,72.87],
    info:"Found in Mumbai after 3 days."
  }
]

export default function LiveMap(){

  const [filter,setFilter]=useState("all")

  const filtered = filter==="all"
    ? cases
    : cases.filter(c=>c.status===filter)

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-6">
          Live Case Map
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button onClick={()=>setFilter("all")}
            className="px-4 py-2 bg-black text-white rounded-lg">
            All
          </button>
          <button onClick={()=>setFilter("active")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Active
          </button>
          <button onClick={()=>setFilter("found")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg">
            Found
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">
          <MapContainer center={[22.97,78.65]} zoom={5}
            style={{height:"60vh",minHeight:"420px"}}>

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filtered.map(c=>(
              <Marker key={c.id}
                position={c.position}
                icon={c.status==="active"?activeIcon:foundIcon}>

                <Popup>
                  <strong>{c.name}</strong>
                  <br/>
                  {c.info}
                </Popup>

              </Marker>
            ))}

          </MapContainer>
        </div>

      </div>
    </div>
  )
}