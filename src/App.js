import './App.css';
import Alphabet from './components/Alphabet/Alphabet';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Alphabet />
        <Countries/>
      </div>
    </div>
  )
}

export default App;
