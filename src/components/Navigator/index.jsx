import React from 'react'
import {  Link} from 'react-router-dom'
import './Navigator.css'
export const MainNavigator = () => {

  return (
    <div className='MainNavigatorC'>
            <Link to={'/alphabet'}><button className='Btn  '>Алфабит</button></Link>
            <Link to={'/countries'}><button className='Btn'>Страны</button></Link>
            <Link to={'/animals'}><button className='Btn'>Животные</button></Link>
    </div>

  )
}
