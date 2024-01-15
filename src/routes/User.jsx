import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import './User.css'
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo'
import UserRepos from '../components/UserRepos'


function User() {

  const { username } = useParams()
  const [user, setUser] = useState({
    userData: {},
    reposData: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`https://api.github.com/users/${username}`)
        const reposRes = await axios.get(`https://api.github.com/users/${username}/repos`)
        setUser({
          userData: userRes.data,
          reposData: reposRes.data
        })

      } catch (error) {
        console.error('Error fetching GitHub user data:', error)
      }
    }

    fetchData()
  }, [username])

  return (
    <>
      <Navbar />
      <div className='user-container'>
        <div style={{display:'flex',flexDirection:'column'}}>
          <UserInfo user={user.userData}/>
          <button className='contact-btn' onClick={() => window.location.href = user.userData.blog}>Contato</button>
        </div>

        <UserRepos repos={user.reposData}/>
      </div>
    </>
  )
}

export default User
