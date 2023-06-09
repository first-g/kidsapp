import React from "react";
import "./Countries.css";
import { Howl } from "howler";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import ImgBack from "../img/93634.png";
import ImgGo from "../img/png-transparent-computer-icons-arrow-yellow-forward-angle-text-trademark-removebg-preview (1).png";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { RightCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

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
      <Loader />
      <Link to={"/"}>
        <div className="BackC">
          <img src={ImgBack} alt="" className="ImgBackC" />
        </div>
      </Link>
      <Link to={"/animals"}>
        <div className="goC">
          <img src={ImgGo} alt="" className="ImgGoC" />
        </div>
      </Link>

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
        <div className="country">
          <div className="container">
            <div className="country__body">
              <div className="arrow">
                <Link to={"/kidsapp"}>
                  <CloseCircleOutlined />
                </Link>
                <Link to={"/kidsapp/animals"}>
                  <RightCircleOutlined />
                </Link>
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
      </div>
    </div>
  );
};

export default Countries;
