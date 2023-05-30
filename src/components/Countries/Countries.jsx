import React from "react";
import "./Countries.css";
import { countries } from "../../data/countries";

const Countries = () => {
  return (
    <div className="country_main">
      <h1>Countries</h1>
      <div className="countries_main">
        {countries.map((el, index)=>{
          return (
            <div key={index} className="country_button">
              <img src={el.img} alt="" className="flag"/>
              <p>{el.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Countries;
