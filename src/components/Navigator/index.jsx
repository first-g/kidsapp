import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";
import { AuthContext } from "../../context";

export const MainNavigator = () => {
  const { setIsAuth } = useContext(AuthContext)

  const handleLogin = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', JSON.stringify(false))
  }

  return (
    <div className="MainNavigator">
      <div className="container">
      <button onClick={handleLogin} className="leave">Чыгуу</button>
        <div className="main__body">
          <Link to={"/kidsapp/alphabet"}>
            <button className="Btn btn-1">Алфавит</button>
          </Link>
          <Link to={"/kidsapp/countries"}>
            <button className="Btn btn-2">Өлкөлөр</button>
          </Link>
          <Link to={"/kidsapp/animals"}>
            <button className="Btn btn-3">Жаныбарлар</button>
          </Link>
          <Link to={"/kidsapp/quiz"}>
            <button className="Btn btn-4">Тест</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
