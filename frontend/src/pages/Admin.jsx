export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-8">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Admin Dashboard
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="grid grid-cols-3 gap-6 text-center mb-8">
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="text-2xl font-bold">128</p>
            <p>Active Cases</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="text-2xl font-bold">34</p>
            <p>AI Match Alerts</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="text-2xl font-bold">76</p>
            <p>Resolved Cases</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-center text-gray-600">
          Case Management Table Placeholder
        </div>

      </div>
    </div>
  )
}