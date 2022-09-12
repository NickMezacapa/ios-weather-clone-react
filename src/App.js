import Display from './components/Display';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-Intro">
        <p id="App-Intro-Eyebrow">New</p>
        <h1 className="App-Intro_h1">Weather. Cloned.</h1>
        <p id="App-IntroContent">Check your local forecast or view forecasts from around the world.</p>
        <div className="App-Navigate_cta">
          <button className="App-Navigate_viewCode">View Code</button>
          <p id="App-Navigate_howItWorks">How it works</p>
        </div>
      </div>
      <Display />
      <Home />
    </div>
  );
}

export default App;
