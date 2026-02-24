export default function ReportMissing() {
  return (
    <div className="min-h-screen pt-28 px-8 bg-gradient-to-br from-blue-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h1 className="text-3xl font-bold mb-6">
            Register Missing Person
          </h1>

          <div className="space-y-4">

            <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />

            <input className="w-full border p-3 rounded-lg" placeholder="Age" />

            <input className="w-full border p-3 rounded-lg" placeholder="Last Seen Location" />

            <textarea className="w-full border p-3 rounded-lg" placeholder="Description / Clothing / Details" />

          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Submit Report
          </button>

        </div>

        {/* RIGHT INFO PANEL */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-xl font-semibold mb-4">
            Why Early Reporting Matters
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ First 24 hours are critical</li>
            <li>✔ AI helps match sightings automatically</li>
            <li>✔ Community reporting increases recovery chances</li>
          </ul>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <p className="font-semibold">
              MissingLink connects families, citizens, and admins in real time.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}