import React from 'react'
import { Link } from 'react-router-dom'
import './Navigator.css'
export const MainNavigator = () => {
  return (
    <div className='MainNavigator'>
      <div className="container">
        <div className="main__body">
          <Link to={'/kidsapp/alphabet'}><button className='Btn'>Алфавит</button></Link>
          <Link to={'/kidsapp/countries'}><button className='Btn'>Страны</button></Link>
          <Link to={'/kidsapp/animals'}><button className='Btn'>Животные</button></Link>
          <Link to={'/kidsapp/quiz'}><button className='Btn'>Тест</button></Link>
        </div>
      </div>
    </div>

  )
}
