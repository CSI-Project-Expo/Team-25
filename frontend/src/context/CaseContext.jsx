import { createContext, useState } from "react"

export const CaseContext = createContext()

export function CaseProvider({ children }) {

  const [cases, setCases] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      age: 28,
      address: "MG Road, Bangalore",
      details: "Last seen near metro station",
      position: [12.9716, 77.5946],
      status: "ongoing",
      aiScore: 65,
      isExample: true, // 🔥 IMPORTANT
      matches: [
        {
          id: 101,
          location: "Brigade Road",
          similarity: 72,
          notes: "Seen near café",
          image: null
        }
      ]
    }
  ])

  // ✅ ADD MISSING PERSON
  const addCase = (newCase) => {
    setCases(prev => [
      ...prev,
      {
        ...newCase,
        id: Date.now(),
        status: "ongoing",
        aiScore: 0,
        isExample: false, // 🔥 normal case
        matches: []
      }
    ])
  }

  // ✅ ADD SIGHTING
  const addSighting = (sighting) => {
    setCases(prev =>
      prev.map(c => {

        // ❌ DO NOT UPDATE EXAMPLE CASE
        if (c.isExample) return c

        if (c.status !== "ongoing") return c

        return {
          ...c,
          aiScore: c.aiScore === 0
            ? 70
            : Math.min(100, c.aiScore + 10),

          matches: [
            ...c.matches,
            {
              id: Date.now(),
              location: sighting.location,
              similarity: 70,
              notes: sighting.details,
              image: sighting.image || null
            }
          ]
        }
      })
    )
  }

  return (
    <CaseContext.Provider value={{ cases, addCase, addSighting }}>
      {children}
    </CaseContext.Provider>
  )
}