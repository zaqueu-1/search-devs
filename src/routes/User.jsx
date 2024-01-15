import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import './User.css'
import UserInfo from '../components/UserInfo'
import UserRepos from '../components/UserRepos'


function User() {

  const { username } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching GitHub user data:', error)
      }
    }

    fetchData()
  }, [username])

  return (
    <div className='user-container'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <UserInfo user={user}/>
        <button className='contact-btn' onClick={() => window.location.href = user.blog}>Contato</button>
      </div>

      <UserRepos user={user}/>
    </div>
  )
}

export default User
