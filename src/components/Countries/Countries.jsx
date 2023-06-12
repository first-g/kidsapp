import React, {useState, useEffect} from "react";
import "./Countries.css";
import { Howl } from "howler";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import ImgBack from "../img/93634.png";
// import ImgGo from "../img/png-transparent-computer-icons-arrow-yellow-forward-angle-text-trademark-removebg-preview (1).png";
import Loader from "../Loader/Loader";
import { RightCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Countries = () => {
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
    <div className="country_main">

      <div className="countries_main">
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
                      {loading ? (
                        <>
                          <Loader />
                        </>
                      ) : (
                        <>
                          <img src={el.img} alt="" className="flag" />
                          <p>{el.name}</p>
                        </>
                      )}
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
