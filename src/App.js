import './App.css';
import Alphabet from './components/Alphabet/Alphabet';
import { Animals } from './components/Animals/Animals';
import Countries from './components/Countries/Countries';
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Alphabet />
        <Countries/>
        <Animals/>
      </div>
    </div>
  )
}

export default App;
