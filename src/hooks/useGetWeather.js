import { useEffect, useState } from 'react';
import getWeatherProxy from '../api/getWeatherProxy';
import useGetLocation from './useGetLocation';

export default function useGetWeather(initialValue) {
    const [latitude, longitude] = useGetLocation(initialValue);
    const [weather, setWeather] = useState(initialValue);

    useEffect(() => {
        let fetchIsCancelled = false; // toggle false to make api call, control for API exhaustion during development
        if (!fetchIsCancelled && latitude) {
            getWeatherProxy(latitude, longitude)
                .then(setWeather);
        }

        return () => fetchIsCancelled = true;; // cleanup

    }, [latitude, longitude]);

    return weather;
}