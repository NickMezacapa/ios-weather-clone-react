import { useEffect, useState } from 'react';
import useGetLocation from './useGetLocation';
import getWeatherProxy from '../api/getWeatherProxy';

export default function useGetWeather() {
    const [latitude, longitude] = useGetLocation();
    const [weather, setWeather] = useState(null);

    // if the component has not unmounted, and a non-null value is returned from useGetLocation, 
    // execute async fn to call weather api with the returned value of useGetLocation,
    // set state of weather with return value from async fn
    useEffect(() => {
        let fetchIsCancelled = false;
        if (!fetchIsCancelled && latitude) {
            getWeatherProxy(latitude, longitude)
                .then(setWeather);
        }

        return () => fetchIsCancelled = true;; // cleanup

    }, [latitude, longitude]);


    return weather;
}