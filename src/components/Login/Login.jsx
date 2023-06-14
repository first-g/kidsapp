import React, { useState } from 'react'
import './Login.css'
import { useContext } from 'react'
import { AuthContext } from '../../context'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const [inputData, setInputData] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()

    if(inputData.trim() !== '') {
      setIsAuth(true);
      localStorage.setItem('isAuth', JSON.stringify(true))
    } else {
      setIsValid(true)
    }
  }
  
  const handleInputChange = (event) => {
    setInputData(event.target.value)
    setIsValid(false)
  }
  return (
    <div className="login">
      <div className="container">
        <div className="login__body">
          <form className='login__form'>
            <input className={isValid ? 'pas__v' : 'pas'} type="text" onChange={handleInputChange} placeholder='Сенин атын ким ?'/>
            <input className={isValid ? 'pas__v' : 'pas'} type="text" onChange={handleInputChange} placeholder='Канча жаштасын ?'/>
            <button onClick={handleLogin}>Кирүү</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login