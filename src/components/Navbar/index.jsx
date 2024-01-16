import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Navbar.css'
import { DarkContext } from '../../contexts/darkMode/DarkContext'
import { MdSunny } from "react-icons/md"
import { IoMdMoon } from "react-icons/io"
import { CiSearch } from "react-icons/ci"

function Navbar() {

    const { darkMode, toggleDarkMode } = useContext(DarkContext)
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
            <input 
                type="text" 
                placeholder="Search" 
                onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyDown={(e) => handleEnter(e, searchTerm)}
            />
            <CiSearch 
                style={darkMode ? {color:'#fcfcfc'} : {color:'#0000005C'}} 
                className='searchIcon' 
            />
        </div>
        <span className='nav-dark-mode-toggle' onClick={toggleDarkMode}>
          {darkMode ? <MdSunny className='dark-mode-icon-sun' /> : <IoMdMoon className='dark-mode-icon-moon'/>}
        </span>
    </div>
  )
}

export default Navbar
