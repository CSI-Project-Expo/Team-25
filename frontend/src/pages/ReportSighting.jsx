export default function ReportSighting() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-2">
            Report a Sighting (Anonymous)
          </h1>

          <p className="text-gray-500 mb-6">
            Your information helps reunite families faster. Reports can be submitted anonymously.
          </p>

          <div className="grid gap-4">
            <input className="border p-3 rounded-lg" placeholder="Location Seen" />
            <textarea className="border p-3 rounded-lg" placeholder="Details" />
          </div>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
            Submit Sighting
          </button>

        </div>

        {/* RIGHT SIDE - INFO PANEL */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-4">
            Why Your Report Matters
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Early sightings increase recovery chances</li>
            <li>✔ Anonymous reporting protects your identity</li>
            <li>✔ AI helps match reports with missing cases</li>
            <li>✔ Community involvement saves lives</li>
          </ul>

          <div className="mt-8 bg-gray-100 p-6 rounded-xl">
            <p className="font-semibold">
              Every minute matters.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Help bring someone home safely.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}