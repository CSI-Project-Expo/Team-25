import { Link } from "react-router-dom"

export default function Admin() {
  return (
    <div className="min-h-screen pt-28 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-10 text-center">
          Admin Control Dashboard
        </h1>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold text-blue-600">128</p>
            <p className="text-gray-500">Active Cases</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold text-red-500">34</p>
            <p className="text-gray-500">AI Match Alerts</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold text-green-600">76</p>
            <p className="text-gray-500">Resolved Cases</p>
          </div>

        </div>

        {/* CASE TABLE */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Case Management
          </h2>

          <table className="w-full text-left">

            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Status</th>
                <th>Last Seen</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">Rohan Sharma</td>
                <td className="text-red-500">Active</td>
                <td>Delhi</td>
                <td>
                  <Link to="/case/1" className="text-blue-600 font-medium">
                    Review
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="py-3">Meena Iyer</td>
                <td className="text-green-600">Found</td>
                <td>Mumbai</td>
                <td>
                  <Link to="/case/2" className="text-blue-600 font-medium">
                    View
                  </Link>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}