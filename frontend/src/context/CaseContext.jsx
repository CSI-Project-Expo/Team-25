import { createContext, useState } from "react"

export const CaseContext = createContext()

export function CaseProvider({ children }) {

  const [cases, setCases] = useState([
    {
      id: 1,
      name: "Rohan Sharma",
      age: 16,
      address: "Connaught Place, Delhi 110001",
      details: "Left school premises and did not return home.",
      image: null,
      status: "active",
      position: [28.63, 77.22],
      aiScore: 72,
      matches: [
        {
          id: 101,
          location: "Karol Bagh Metro Station",
          similarity: 78,
          notes: "Individual wearing similar backpack reported."
        }
      ]
    }
  ])

  // ✅ ADD NEW CASE (AI STARTS AT 0)
  const addCase = (newCase) => {
    setCases(prev => [
      ...prev,
      {
        ...newCase,
        id: prev.length + 1,
        status: "active",
        aiScore: 0,        // 🔥 starts at 0%
        matches: []
      }
    ])
  }

  // ✅ ADD SIGHTING → UPDATE AI SCORE + MATCHES
  const addSighting = (sighting) => {

    setCases(prev =>
      prev.map(c => {

        if(c.status !== "active") return c

        // Simulate AI similarity detection
        const similarity = Math.floor(Math.random() * 40) + 50 // 50–90%

        if(similarity > 60){

          const updatedScore = Math.min(
            100,
            c.aiScore + Math.floor(similarity / 3)
          )

          return {
            ...c,
            aiScore: updatedScore,
            matches: [
              ...c.matches,
              {
                id: Date.now(),
                location: sighting.location,
                similarity,
                notes: sighting.details
              }
            ]
          }
        }

        return c
      })
    )
  }

  return (
    <CaseContext.Provider value={{ cases, addCase, addSighting }}>
      {children}
    </CaseContext.Provider>
  )
}