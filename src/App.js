import './App.css';
import Alphabet from './components/Alphabet/Alphabet';
import { Animals } from './components/Animals/Animals';
import Countries from './components/Countries/Countries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainNavigator } from './components/Navigator';
function App() {
  return (
    <div className='App'>
    <Router>
                |
                  <Routes>
                    <Route path='/' element={<MainNavigator/>}/>
                    <Route path='/alphabet' element={<Alphabet/>}/>
                    
                    <Route path='/countries' element={<Countries/>}/>
                    <Route path='/animals' element={<Animals/>}/>
                </Routes>
    </Router>
    </div>
  )
}

export default App;
