import React from 'react'
import { useGlobalContext } from './context'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button type="button" onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
