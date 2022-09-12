import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import '../styles/CurrentWeather.css';

export default function CurrentWeather() {
    const [currentWeather, setCurrentWeather] = useState(85);
    const [location, setLocation] = useState('Los Angeles');
    const [weatherDescription, setWeatherDescription] = useState('Partly Cloudy');
    const [weatherHigh, setWeatherHigh] = useState(91);
    const [weatherLow, setWeatherLow] = useState(76);

/*     const [latitude, longitude] = useFetch();
    console.log(latitude, longitude); */


  return (
    <section className="CurrentWeather">
        <h4 className="CurrentWeather-Location_h4">{location}</h4>
        <h1 className="CurrentWeather-h1">{currentWeather}&#176;</h1>
        <h4 className="CurrentWeather-Description_h4">{weatherDescription}</h4>
        <div className="CurrentWeather-HighLow_cta">
                <span>H:{weatherHigh}&#176;</span>
                <span>L:{weatherLow}&#176;</span>
        </div>
    </section>
  )
}
