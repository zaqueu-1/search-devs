import '../../routes/User.css'
import { useContext } from 'react'
import { DarkContext } from '../../contexts/darkMode/DarkContext'
import { FaRegStar } from "react-icons/fa"
import { BsDot } from "react-icons/bs"

function UserRepos({repos}) {

    const { darkMode } = useContext(DarkContext)
    const sortedRepos = repos ? [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count) : []

    const handleUpdated = (updatedAt) => {
        const updatedDate = new Date(updatedAt)
        const currentDate = new Date()
        const timeDifference = currentDate - updatedDate
      
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      
        if (daysDifference === 0) {
          return 'Atualizado hoje'
        } else if (daysDifference === 1) {
          return 'Atualizado nas últimas 24 horas'
        } else {
          return `Atualizado há ${daysDifference} dias`
        }
      }

    const noDescription = 'O usuário não adicionou uma descrição ao repositório.'

  return (
    <div style={darkMode ? {background:'#2B3549',transition:'all 0.3s ease-in-out'} : {}} className='user-repos'>
        {sortedRepos?.map((repo) => (
            <div 
              style={darkMode ? {background:'#2B3549',transition:'all 0.3s ease-in-out'} : {}} 
              className={darkMode ? 'repo-container color-dark' : 'repo-container color-light'}
            >
                <a href={repo?.html_url} target='_blank' rel="noreferrer">
                    <h3 key={repo.id}>{repo?.name}</h3>
                </a>
                <p>{repo?.description ? repo.description : noDescription}</p>
                <div className='repo-stats'>
                  <FaRegStar style={{width:'20px',height:'20px'}} className={darkMode ? 'icon-dark' : ''}/>
                  <p>{repo?.stargazers_count}</p>
                  <BsDot style={{width:'20px',height:'20px'}} className={darkMode ? 'icon-dark' : ''}/>
                  <p>{handleUpdated(repo.updated_at)}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserRepos
