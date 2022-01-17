import { useState } from "react"
import DarkMode from "./DarkMode"

function loadDarkMode() {
  if (typeof localStorage === 'undefined') {
    return false
  }
  const value = localStorage.getItem("darkMode")
  return (value === null) ? false : JSON.parse(value)
}

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode)

  function handleDarkMode() {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  const mode = darkMode ? 'Light Mode' : 'Dark Mode'
  return (
    <>
      <button onClick={handleDarkMode}>{mode}</button>
      {
        darkMode && <DarkMode />
      }
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}