import '../../routes/User.css'

function UserRepos({repos}) {
    const sortedRepos = repos ? [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count) : []
    const slicedRepos = sortedRepos?.slice(0, 4)

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

  return (
    <div className='user-repos'>
        {slicedRepos?.map((repo) => (
            <div className='repo-container'>
                <a href={repo?.html_url} target='_blank' rel="noreferrer">
                    <h3 key={repo.id}>{repo?.name}</h3>
                </a>
                <p>{repo?.description ? repo.description : 'O usuário não adicionou uma descrição ao repositório.'}</p>
                <div className='repo-stats'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.235L6.179 20L7.388 13.88L3 9.392L9.179 8.621L12 3L14.821 8.621L21 9.392L16.612 13.88L17.821 20L12 17.235Z" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{repo?.stargazers_count}</p>
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.9375 5.13068C2.53646 5.13068 2.17022 5.03291 1.83878 4.83736C1.50734 4.63849 1.24219 4.37334 1.04332 4.0419C0.847775 3.71046 0.75 3.34422 0.75 2.94318C0.75 2.53883 0.847775 2.17259 1.04332 1.84446C1.24219 1.51302 1.50734 1.24953 1.83878 1.05398C2.17022 0.855113 2.53646 0.755682 2.9375 0.755682C3.34186 0.755682 3.7081 0.855113 4.03622 1.05398C4.36766 1.24953 4.63116 1.51302 4.8267 1.84446C5.02557 2.17259 5.125 2.53883 5.125 2.94318C5.125 3.34422 5.02557 3.71046 4.8267 4.0419C4.63116 4.37334 4.36766 4.63849 4.03622 4.83736C3.7081 5.03291 3.34186 5.13068 2.9375 5.13068Z" fill="#4A5568"/>
                    </svg>
                    <p>{handleUpdated(repo.updated_at)}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserRepos
