export default function ReportSighting() {
  return (
    <div className="min-h-screen pt-28 px-8 bg-gradient-to-br from-green-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h1 className="text-3xl font-bold mb-4">
            Report a Sighting (Anonymous)
          </h1>

          <p className="text-gray-500 mb-6">
            You can submit information anonymously. Every detail helps.
          </p>

          <div className="space-y-4">

            <input className="w-full border p-3 rounded-lg" placeholder="Location Seen" />

            <textarea className="w-full border p-3 rounded-lg" placeholder="What did you observe?" />

          </div>

          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Submit Sighting
          </button>

        </div>

        {/* RIGHT TRUST PANEL */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-xl font-semibold mb-4">
            Your Report Saves Lives
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Reports can be anonymous</li>
            <li>✔ Admin verification ensures safety</li>
            <li>✔ AI cross-checks sightings with cases</li>
          </ul>

          <div className="mt-8 bg-green-50 p-6 rounded-xl">
            <p className="font-semibold">
              Community awareness helps reunite families faster.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
