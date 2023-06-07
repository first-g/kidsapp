import React from "react";
import "./Countries.css";
import { Howl } from "howler";
import { countries } from "../../data/countries";
import { Link } from 'react-router-dom'
import { RightCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Countries = () => {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className="country">
      <div className="container">
        <div className="country__body">
          <div className="arrow">
            <Link to={'/kidsapp'}><CloseCircleOutlined /></Link>
            <Link to={'/kidsapp/animals'}><RightCircleOutlined /></Link>
          </div>
          <div className="countries_main">
            {countries.map((el, index) => {
              return (
                <div
                  key={index}
                  className="country_button"
                  onClick={() => playSound(el.sound)}
                >
                  <img src={el.img} alt="" className="flag" />
                  <p>{el.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
