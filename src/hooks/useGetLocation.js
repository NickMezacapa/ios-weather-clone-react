import { useEffect, useState } from 'react';

export default function useGetLocation() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const setCoordinates = (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
    };

    // on first mount, get user geolocation
    useEffect(() => {
        if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(position => {
                console.log('navigator UE')
                setCoordinates(position.coords.latitude, position.coords.longitude);
            })
          }
    }, []);


   return [latitude, longitude ];
}
