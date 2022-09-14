import { useState } from 'react';
import axios from 'axios';

export default function useAxios(initialValue) {
    const [data, setData] = useState(initialValue);

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (url) => {
        let res = await axios.get(url, { signal });
        let resultData = res.data;
        setData(resultData);
        controller.abort();           
    };

    return [data, fetchData];
}