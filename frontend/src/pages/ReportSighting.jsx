import { useState } from "react"

export default function ReportSighting() {
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="min-h-screen pt-28 px-8 bg-gradient-to-br from-green-50 via-white to-gray-100">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h1 className="text-3xl font-bold mb-4">
            Report a Sighting (Anonymous)
          </h1>

          <p className="text-gray-500 mb-6">
            Uploading an image helps authorities verify sightings faster.
            Uploading is optional.
          </p>

          <div className="space-y-4">

            <input
              className="w-full border p-3 rounded-lg"
              placeholder="Location Seen"
            />

            <textarea
              className="w-full border p-3 rounded-lg"
              placeholder="What did you observe?"
            />

            {/* IMAGE UPLOAD */}
            <div className="border-2 border-dashed rounded-lg p-4 text-center">

              <p className="text-sm text-gray-500 mb-2">
                Upload image (optional)
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full"
              />

            </div>

            {/* IMAGE PREVIEW */}
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Uploaded proof"
                  className="rounded-lg max-h-60 mx-auto shadow"
                />
              </div>
            )}

          </div>

          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Submit Sighting
          </button>

        </div>

        {/* RIGHT TRUST PANEL */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-xl font-semibold mb-4">
            Why Image Proof Matters
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Helps admins verify sightings quickly</li>
            <li>✔ Improves AI matching accuracy</li>
            <li>✔ Reduces false reports</li>
            <li>✔ Uploading is completely optional</li>
          </ul>

          <div className="mt-8 bg-green-50 p-6 rounded-xl">
            <p className="font-semibold">
              Even a single photo can help reunite a family.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
