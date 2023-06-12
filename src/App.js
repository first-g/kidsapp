import "./App.css";
import Alphabet from "./components/Alphabet/Alphabet";
import { Animals } from "./components/Animals/Animals";
import Countries from "./components/Countries/Countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainNavigator } from "./components/Navigator";
import Quiz from "./components/Quiz/Quiz";

import kidsMusic from './music/kids.mp3';
import { Howl } from "howler";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sound = new Howl({
      src: [kidsMusic],
      autoplay: true,
      loop: true,
      volume: 0.2
    });

    return () => {
      sound.unload();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/kidsapp" element={<MainNavigator />} />
          <Route path="/kidsapp/alphabet" element={<Alphabet />} />
          <Route path="/kidsapp/countries" element={<Countries />} />
          <Route path="/kidsapp/animals" element={<Animals />} />
          <Route path="/kidsapp/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
