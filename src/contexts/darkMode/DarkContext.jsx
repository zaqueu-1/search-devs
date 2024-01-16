import React, {createContext, useState} from "react"

const DarkContext = createContext()

function DarkProvider(props) {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') ? JSON.parse(localStorage.getItem('mode')) : false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('mode', !darkMode)
        return !darkMode
    }

    return (
        <DarkContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkContext.Provider>
    )
}

export {DarkContext, DarkProvider}