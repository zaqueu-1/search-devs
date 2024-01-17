import './ErrorPage.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DarkContext } from '../contexts/darkMode/DarkContext'

function ErrorPage() {

    const navigate = useNavigate()
    const { darkMode } = useContext(DarkContext)

    const handleGoBack = () => {
        navigate('/')
    }


  return (
    <div className={darkMode ? 'error-container container-dark color-dark' : 'error-container container-light color-light'}>
        <p>404</p>
        <p>Usuário não encontrado</p>
        <button className='contact-btn' onClick={() => handleGoBack()}>Voltar</button>
    </div>
  )
}

export default ErrorPage
