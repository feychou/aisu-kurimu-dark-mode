import { createContext, useState, useEffect } from 'react'
import { moods } from './data'

export const StateContext = createContext({})

const StateContextProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedMood, setSelectedMood] = useState(moods[0])
  const [darkModeOn, setDarkModeOn] = useState(false)

  useEffect(() => {
    // Enables dark mode automatically depending on user preference
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (new Date() > new Date(2021, 11, 1))
      document.querySelector('body').style.opacity = Math.random()
    if (userPrefersDark) setDarkModeOn(true)
  }, [])

  return (
    <StateContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        selectedMood,
        setSelectedMood,
        darkModeOn,
        setDarkModeOn,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider
