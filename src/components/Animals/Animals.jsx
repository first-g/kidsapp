import React, { useEffect, useState } from "react";
import "./Animals.css";
import { animal } from "../../data/Animal";
import { Howl } from "howler";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { RightCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

export const Animals = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  });

  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className="Animals">
      <div className="container">
      <div className="arrow">
        <Link to={"/kidsapp"}>
          <CloseCircleOutlined />
        </Link>
        <Link to={"/kidsapp/quiz"}>
          <RightCircleOutlined />
        </Link>
      </div>

      <br />
      <div className="Animal_MainBlock">
        {animal.map((el, index) => {
          return (
            <div
              onClick={() => playSound(el.sound)}
              key={index}
              className="AnimalBlock"
              style={{ backgroundColor: el.color }}
            >
              {loading ? (
                <>
                  <Loader />
                </>
              ) : (
                <img src={el.img} alt="" className="AnimalImg" />
              )}

              <h1 className="AnimalName">{el.Name}</h1>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};
