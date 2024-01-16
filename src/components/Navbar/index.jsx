import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Navbar.css'
import { DarkContext } from '../../contexts/darkMode/DarkContext'

function Navbar() {

    const { darkMode, toggleDarkMode } = useContext(DarkContext)
    const [dark, setDark] = useState(darkMode)
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleEnter = (e, searchTerm) => { 
        if (e.key === 'Enter') {

            if (searchTerm === '') return

            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.github.com/users/${searchTerm}`)
                    const user = response.data
                    user ? navigate(`/users/${searchTerm}`) : null
                } catch (error) {
                    navigate(`/not_found`)
                }
            }
            fetchData()
        }
    }

  return (
    <div className={darkMode ? 'navbar-container container-dark' : 'navbar-container container-light'}>
        <a href='/' className='navbar-logo'>
            <p>
                <span style={{color:'#0069CA'}}>Search</span>
                <span style={{color:'#8C19D2'}}> d_evs</span>
            </p>
        </a>
        <div className='nav-input-box'>
            <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => handleEnter(e, searchTerm)}/>
            <svg className='nav-searchIcon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#A0AEC0"/>
            </svg>
        </div>
    </div>
  )
}

export default Navbar
