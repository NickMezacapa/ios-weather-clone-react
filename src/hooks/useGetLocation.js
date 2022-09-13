import { useEffect, useState } from 'react';

export default function useGetLocation(initialValue) {
    const [latitude, setLatitude] = useState(initialValue);
    const [longitude, setLongitude] = useState(initialValue);

    const setCoordinates = (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
    };

    // on first mount, get user geolocation
    useEffect(() => {
        if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(position => {
                setCoordinates(position.coords.latitude, position.coords.longitude);
            })
          }
    }, []);


   return [latitude, longitude ];
}
