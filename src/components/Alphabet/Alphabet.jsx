import React from "react";
import { Howl } from "howler";
import { alphabet } from "../../data/alphabet";
import "./Alphabet.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import ImgBack from "../img/93634.png";
import ImgGo from "../img/png-transparent-computer-icons-arrow-yellow-forward-angle-text-trademark-removebg-preview (1).png";
=======
import { RightCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

>>>>>>> 8b320984bbb22bd53b03e770a0f77ab3c07ffc50
const Alphabet = () => {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className="alphabet">
<<<<<<< HEAD
      <Link to={"/"}>
        <div className="Back">
          <img src={ImgBack} alt="" className="ImgBack" />
        </div>
      </Link>
      <Link to={"/countries"}>
        <div className="go">
          <img src={ImgGo} alt="" className="ImgGo" />
        </div>
      </Link>

      <h1>Алфавит</h1>
      <div className="alphabet__main">
        {alphabet.map((el, index) => {
          return (
            <div
              onClick={() => playSound(el.sound)}
              style={{ backgroundColor: el.color }}
              className="alphabet__button"
              key={index}
            >
              <h3>{el.letter}</h3>
              <p>{el.word}</p>
            </div>
          );
        })}
=======
      <div className="container">
        <div className="alphabet__container">
        <div className="arrow">
          <Link to={'/kidsapp'}><CloseCircleOutlined /></Link>
          <Link to={'/kidsapp/countries'}><RightCircleOutlined /></Link>
        </div>
        <div className="alphabet__main">
          {alphabet.map((el, index) => {
            return (
              <div
                onClick={() => playSound(el.sound)}
                style={{ backgroundColor: el.color }}
                className="alphabet__button"
                key={index}
              >
                <h3>{el.letter}</h3>
                <p>{el.word}</p>
              </div>
            );
          })}
        </div>
        </div>
>>>>>>> 8b320984bbb22bd53b03e770a0f77ab3c07ffc50
      </div>
    </div>
  );
};

export default Alphabet;
