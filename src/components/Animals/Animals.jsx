import React from 'react'
import './Animals.css'
import { animal } from '../../data/Animal'
import { Howl } from 'howler'
import { Link } from 'react-router-dom'
import ImgBack from '../img/93634.png'
import ImgGo from '../img/png-transparent-computer-icons-arrow-yellow-forward-angle-text-trademark-removebg-preview (1).png'

export const Animals = () => {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }
  return (
    <div className='Animals'>
     <Link to={'/'}><div className="Back"><img src={ImgBack} alt="" className="ImgBack" /></div></Link>
     <Link to={'/alphabet'}><div className="go"><img src={ImgGo} alt="" className="ImgGo" /></div></Link>
    
     <h1>Животные</h1>
     <br /> 
          <div className='Animal_MainBlock' >{animal.map((el,index)=>{
          return(
            <div onClick={()=>playSound(el.sound)} key={index} className='AnimalBlock' style={{backgroundColor:el.color}}>
               <img src={el.img} alt=""  className='AnimalImg'/>
               <h1 className='AnimalName'>{el.Name}</h1>
            </div>
          )
              })
             }
          </div>
    </div>
  )
}