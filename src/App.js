import Display from './components/Display';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Intro">
        <h1 className="App-Intro_h1">Weather App</h1>
      </div>
      <Display />
      <Home />
    </div>
  );
}

export default App;
