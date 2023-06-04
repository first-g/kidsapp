import React from "react";
import "./Countries.css";
import { Howl } from "howler";
import { countries } from "../../data/countries";

const Countries = () => {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className="country_main">
      <h1>Countries</h1>
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
  );
};

export default Countries;
