import '../../routes/User.css'
import { useContext, useState } from 'react'
import { DarkContext } from '../../contexts/darkMode/DarkContext'
import { FaRegStar } from "react-icons/fa"
import { BsDot } from "react-icons/bs"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

function UserRepos({repos}) {

    const { darkMode } = useContext(DarkContext)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4
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

    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage
    const currentRepos = sortedRepos.slice(firstIndex, lastIndex)
  
    const paginate = (page) => setCurrentPage(page)

  return (
    <div style={darkMode ? {background:'#2B3549',transition:'all 0.3s ease-in-out'} : {}} className='user-repos'>
        {currentRepos?.map((repo) => (
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
        {repos.length > 4 ?
          <div className='pagination'>
            <button disabled={currentPage === 1} onClick={() => paginate(currentPage-1)}>
              <IoArrowBackCircleOutline style={{width:'24px',height:'24px'}} className={darkMode ? 'icon-dark' : ''}/>
            </button>
            <button disabled={currentPage === Math.ceil(sortedRepos.length/itemsPerPage)} onClick={() => paginate(currentPage+1)}>
              <IoArrowForwardCircleOutline style={{width:'24px',height:'24px'}} className={darkMode ? 'icon-dark' : ''}/>
            </button>
          </div> 
        : null }
    </div>
  )
}

export default UserRepos
