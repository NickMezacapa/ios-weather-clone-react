import axios from 'axios';

export default async function getWeatherProxy(latitude, longitude) {
    const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const WEATHER_REQUEST_URL = `${WEATHER_API_URL}lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`;

    const controller = new AbortController();
    const { signal } = controller;

    let res = await axios.get(WEATHER_REQUEST_URL, { signal });
    let data = res.data;
    controller.abort();

    return data;
};


