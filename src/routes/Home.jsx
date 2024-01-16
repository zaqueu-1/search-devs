import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { DarkContext } from '../contexts/darkMode/DarkContext'
import { MdSunny } from "react-icons/md"
import { IoMdMoon } from "react-icons/io"
import { CiSearch } from "react-icons/ci"

function Home() {

  const { darkMode, toggleDarkMode } = useContext(DarkContext)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (search) => {

    if (search === '') return

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${search}`)
        const user = response.data
        user ? navigate(`/users/${search}`) : null
      } catch (error) {
        navigate(`/not_found`)
      }
    }

    fetchData()
  }

  const handleEnter = (e, search) => {
    if (e.key === 'Enter') {
      handleSearch(search)
    }
  }

  return (
    <>
      <div className={darkMode ? 'home-container container-dark' : 'home-container container-light'}>
        <h1>
          <span style={{color:'#0069CA'}}>Search</span>
          <span style={{color:'#8C19D2'}}> d_evs</span>
        </h1>
        <div className={darkMode ? 'input-box container-dark' : 'input-box container-light'}>
          <input 
            type="text" 
            placeholder="Search" 
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => handleEnter(e, search)} 
          />
          <CiSearch 
                style={darkMode ? {color:'#fcfcfc'} : {color:'#0000005C'}} 
                className='searchIcon' 
            />
          <button onClick={() => handleSearch(search)}>Search</button>
        </div>
        <span className='dark-mode-toggle' onClick={toggleDarkMode}>
          {darkMode ? <MdSunny className='dark-mode-icon-sun' /> : <IoMdMoon className='dark-mode-icon-moon'/>}
        </span>
      </div>
    </>
  )
}

export default Home
