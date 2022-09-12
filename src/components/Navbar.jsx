import AppIcon from '../assets/weather-favicon.png';
import '../styles/Nav.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
        <div className="Navbar-Left_cta">
            <img src={AppIcon} alt="Weather App Icon" />
            <h1>Weather</h1>
        </div>
        <div className="Navbar-Right_cta">
        </div>
    </nav>
  )
}
