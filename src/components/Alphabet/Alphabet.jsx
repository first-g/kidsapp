import React from "react";
import { Howl } from "howler";
import { alphabet } from "../../data/alphabet";
import "./Alphabet.css";
import { Link } from "react-router-dom";
import { RightCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

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
      </div>
    </div>
  );
};

export default Alphabet;
