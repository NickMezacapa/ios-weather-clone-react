import CurrentWeather from './CurrentWeather';
import Widgets from './Widgets';
import './styles/Home.css';

export default function Home() {
  return (
    <section className="Weather-Home_cta">
        <div className="Home-overlay"></div>
        <CurrentWeather />
        <Widgets />
    </section>
  )
}
