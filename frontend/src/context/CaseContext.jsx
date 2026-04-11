import { createContext, useState } from "react"

export const CaseContext = createContext()

export function CaseProvider({ children }) {

  const [cases, setCases] = useState([])

  const addCase = (newCase) => {
    setCases(prev => [
      ...prev,
      {
        ...newCase,
        id: Date.now(),
        status: "active",
        aiScore: 0,
        matches: []
      }
    ])
  }

  const addSighting = (sighting) => {
    setCases(prev =>
      prev.map(c => {
        if (c.status !== "active") return c

        return {
          ...c,
          matches: [
            ...c.matches,
            {
              id: Date.now(),
              location: sighting.location,
              notes: sighting.details
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