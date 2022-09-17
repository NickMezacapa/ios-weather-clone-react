import { useRef } from 'react';
import useGetWeather from '../hooks/useGetWeather';
import './styles/CurrentWeather.css';

export default function CurrentWeather() {
    const weatherRef = useRef(null);
    weatherRef.current = useGetWeather(null);

    const defaultValues = {
      currentTemp: 85,
      location: "Los Angeles",
      weatherDescription: "Partly Cloudy",
      weatherHigh: 91,
      weatherLow: 75
  }

    const weather = weatherRef.current;
    const currentTemp = Math.floor(weather?.current.temp) ?? defaultValues.currentTemp;  
    const weatherHigh = Math.floor(weather?.daily[0].temp.max)?? defaultValues.weatherHigh;;
    const weatherLow = Math.floor(weather?.daily[0].temp.min) ?? defaultValues.weatherLow;;
    const weatherDescription = weather?.current.weather[0].description ?? defaultValues.weatherDescription;;



  return (
    <section className="CurrentWeather">
        <h4 className="CurrentWeather-Location_h4">{defaultValues.location}</h4>
        <h1 className="CurrentWeather-h1">{currentTemp}&#176;</h1>
        <h4 className="CurrentWeather-Description_h4">{weatherDescription}</h4>
        <div className="CurrentWeather-HighLow_cta">
                <span>H:{weatherHigh}&#176;</span>
                <span>L:{weatherLow}&#176;</span>
        </div>
    </section>
  )
}
