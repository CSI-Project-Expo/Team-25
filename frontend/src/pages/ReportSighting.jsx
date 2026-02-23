export default function ReportSighting() {
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-4">
          Report a Sighting (Anonymous)
        </h1>

        <p className="text-gray-500 mb-6">
          Your report may help reunite a family faster.
        </p>

        <div className="grid gap-4">
          <input className="border p-3 rounded-lg" placeholder="Location Seen" />
          <textarea className="border p-3 rounded-lg" placeholder="Details" />
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Submit Sighting
        </button>

      </div>
    </div>
  )
}