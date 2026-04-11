import { createContext, useState, useEffect } from "react"

export const CaseContext = createContext()

export function CaseProvider({ children }) {

  const [cases, setCases] = useState([])

  // 🔥 LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("cases")
    if(saved){
      setCases(JSON.parse(saved))
    }
  }, [])

  // 🔥 SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cases", JSON.stringify(cases))
  }, [cases])

  const addCase = (newCase) => {
    setCases(prev => [
      ...prev,
      {
        ...newCase,
        id: prev.length + 1,
        status: "active",
        aiScore: 0,
        matches: []
      }
    ])
  }

  const addSighting = (sighting) => {
    setCases(prev =>
      prev.map(c => {

        if(c.status !== "active") return c

        const similarity = Math.floor(Math.random() * 40) + 50

        if(similarity > 60){
          return {
            ...c,
            aiScore: Math.min(100, c.aiScore + Math.floor(similarity / 3)),
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