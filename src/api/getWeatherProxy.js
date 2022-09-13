import axios from 'axios';

export default async function getWeatherProxy(latitude, longitude) {
    const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const request = `${WEATHER_API_URL}lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`;

    let res = await axios.get(request);
    let data = res.data;

    return data;
};