import { Link } from "react-router-dom"

export default function Admin(){

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold text-blue-600">128</p>
            Active Cases
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold text-red-500">34</p>
            AI Alerts
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold text-green-600">76</p>
            Resolved
          </div>

        </div>

        <div className="overflow-x-auto bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">

          <table className="min-w-full">

            <thead>
              <tr className="text-left border-b">
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-gray-50 transition">
                <td>Rohan Sharma</td>
                <td className="text-red-500">Active</td>
                <td>
                  <Link to="/case/1" className="text-blue-600">
                    Review
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