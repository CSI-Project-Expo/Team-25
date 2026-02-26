import { useParams } from "react-router-dom"

export default function CaseDetails(){

  const { id } = useParams()

  return(
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-8 bg-gray-50">

      <div className="max-w-5xl mx-auto space-y-8">

        {/* MAIN CASE INFO */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-6">
            Case #{id} — Rohan Sharma
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">

            <p><strong>Status:</strong> Active Missing Case</p>
            <p><strong>Age:</strong> 16</p>

            <p><strong>Missing Since:</strong> January 10, 2026</p>
            <p><strong>Last Seen Location:</strong> Connaught Place, Delhi</p>

            <p><strong>Reported By:</strong> Family (Father)</p>
            <p><strong>Clothing Description:</strong> Blue hoodie, black jeans, white sneakers</p>

            <p><strong>How Incident Occurred:</strong> Left school premises after classes and did not return home. Phone switched off shortly after.</p>

          </div>

        </div>

        {/* AI MATCH CONFIDENCE */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-4">
            AI Match Confidence
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{width:"72%"}}
            />
          </div>

          <p className="mt-3 text-gray-600">
            Recent sighting in Delhi metro area shows 72% match probability based on facial and clothing analysis.
          </p>

        </div>

        {/* INVESTIGATION TIMELINE */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Case Updates Timeline
          </h2>

          <div className="space-y-6">

            <div>
              <p className="font-semibold">Jan 10 — Missing Report Filed</p>
              <p className="text-gray-600 text-sm">
                Family registered missing case through MissingLink platform.
              </p>
            </div>

            <div>
              <p className="font-semibold">Jan 11 — CCTV Footage Reviewed</p>
              <p className="text-gray-600 text-sm">
                CCTV footage shows Rohan leaving school area at 4:15 PM.
              </p>
            </div>

            <div>
              <p className="font-semibold">Jan 12 — Citizen Sighting Reported</p>
              <p className="text-gray-600 text-sm">
                Anonymous sighting submitted with image near Rajiv Chowk metro station.
              </p>
            </div>

            <div>
              <p className="font-semibold">Jan 13 — AI Match Alert Generated</p>
              <p className="text-gray-600 text-sm">
                System generated 72% confidence match from uploaded image.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}