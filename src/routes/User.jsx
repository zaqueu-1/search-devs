import { useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import './User.css'
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo'
import UserRepos from '../components/UserRepos'
import { DarkContext } from '../contexts/darkMode/DarkContext'


function User() {

  const { darkMode } = useContext(DarkContext)
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

  const handleContact = () => {
    if (user.userData.blog){
      return window.open(user.userData.blog)
    }

    if (user.userData.twitter_username){
      return window.open(`https://twitter.com/${user.userData.twitter_username}`)
    }
  }

  return (
    <>
      <Navbar />
      <div className={darkMode ? 'user-container container-dark' : 'user-container container-light'}>
        <div style={{display:'flex',flexDirection:'column'}}>
          <UserInfo user={user.userData}/>
          {user.userData.twitter_username || user.userData.blog ? 
            <button className='contact-btn' onClick={() => handleContact()}>Contato</button>
          : null}
        </div>
        <UserRepos repos={user.reposData}/>
      </div>
    </>
  )
}

export default User
