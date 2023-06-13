import "./App.css";
import Alphabet from "./components/Alphabet/Alphabet";
import { Animals } from "./components/Animals/Animals";
import Countries from "./components/Countries/Countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainNavigator } from "./components/Navigator";
import Quiz from "./components/Quiz/Quiz";

import kidsMusic from './music/kids.mp3';
import { Howl } from "howler";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { AuthContext } from "./context";

function App() {
  useEffect(() => {
    const sound = new Howl({
      src: [kidsMusic],
      autoplay: true,
      loop: true,
      volume: 0.0
    });

    return () => {
      sound.unload();
    };
  }, []);

  const [isAuth, setIsAuth] = useState(() => {
    const storedAuth = localStorage.getItem('isAuth');
    return storedAuth ? JSON.parse(storedAuth) : false
  });

  useEffect(() => {
    localStorage.setItem('isAuth', JSON.stringify(isAuth))
  }, [isAuth])

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <Router>
          {isAuth && (
          <Routes>
            <Route path="/kidsapp" element={<MainNavigator />} />
            <Route path="/kidsapp/alphabet" element={<Alphabet />} />
            <Route path="/kidsapp/countries" element={<Countries />} />
            <Route path="/kidsapp/animals" element={<Animals />} />
            <Route path="/kidsapp/quiz" element={<Quiz />} />
          </Routes>
          )}
          {!isAuth && (
            <Routes>
              <Route path="/kidsapp" element={<Login />} />
            </Routes>
          )}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
