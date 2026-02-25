import { useParams } from "react-router-dom"

const cases = [
  {
    id: "1",
    name: "Rohan Sharma",
    status: "Active",
    lastSeen: "Delhi Metro",
    missingDate: "12 Feb 2026",
    aiConfidence: 85,
    timeline: [
      "Missing report registered",
      "AI matched with CCTV near metro",
      "Public sighting submitted",
      "Investigation ongoing"
    ],
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "2",
    name: "Meena Iyer",
    status: "Found",
    lastSeen: "Mumbai",
    missingDate: "2 Jan 2026",
    aiConfidence: 92,
    timeline: [
      "Missing report registered",
      "Multiple sightings reported",
      "AI confirmed match",
      "Person safely found"
    ],
    images: [
      "https://via.placeholder.com/150"
    ]
  }
]

export default function CaseDetails() {

  const { id } = useParams()
  const person = cases.find(c => c.id === id)

  if (!person) {
    return <div className="pt-28 text-center">Case not found</div>
  }

  return (
    <div className="min-h-screen pt-28 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-4">
            {person.name}
          </h1>

          <span className={`px-4 py-2 rounded-full text-white text-sm ${
            person.status === "Active"
              ? "bg-red-500"
              : "bg-green-600"
          }`}>
            {person.status}
          </span>

          <p className="mt-4">
            <strong>Missing Since:</strong> {person.missingDate}
          </p>

          <p>
            <strong>Last Seen:</strong> {person.lastSeen}
          </p>

        </div>

        {/* AI MATCH CONFIDENCE */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-4">
            AI Match Confidence
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-blue-600 h-6 rounded-full text-white text-sm flex items-center justify-center"
              style={{ width: `${person.aiConfidence}%` }}
            >
              {person.aiConfidence}%
            </div>
          </div>

        </div>

        {/* TIMELINE */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Investigation Timeline
          </h2>

          <ul className="space-y-4">
            {person.timeline.map((step, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                {step}
              </li>
            ))}
          </ul>

        </div>

        {/* IMAGE EVIDENCE */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Evidence / Sightings Images
          </h2>

          <div className="flex gap-4 flex-wrap">
            {person.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="evidence"
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  )
}