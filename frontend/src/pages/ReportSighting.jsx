export default function ReportSighting() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-8">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Report a Sighting (Anonymous)
        </h1>

        <div className="grid gap-4">
          <input className="border p-3 rounded-lg" placeholder="Location Seen" />
          <textarea className="border p-3 rounded-lg" placeholder="Details" />
        </div>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
          Submit Sighting
        </button>

      </div>
    </div>
  )
}