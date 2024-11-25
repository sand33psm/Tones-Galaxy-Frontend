'use client'
import { useState, useEffect } from "react"
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') setDarkMode(true)
        
    }, [])

    useEffect(()=>{
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const toggleTheme = () => {
        
        setDarkMode(!darkMode)
        console.log(darkMode);
    }
 
  return (
        <button
            className="p-2 rounded-full dark:hover:bg-gray-800 transition-colors"
            onClick={toggleTheme}
        >
            {darkMode ? (
                <FaMoon className="w-6 h-6" />
            ) : (
                <BsSunFill className="w-6 h-6" />
            )}
        </button>
  )
}
