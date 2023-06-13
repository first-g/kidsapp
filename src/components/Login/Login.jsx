import React from 'react'
import './Login.css'
import { useContext } from 'react'
import { AuthContext } from '../../context'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', JSON.stringify(true))
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__body">
          <form className='login__form'>
            <input className='log' type="text" placeholder='Логин'/>
            <input className='pas' type="text" placeholder='Пароль'/>
            <button onClick={handleLogin}>Войти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login