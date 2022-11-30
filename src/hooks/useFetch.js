import { useEffect, useState } from "react";
import { ApiRequest } from "../api/ApiRequest";

export const useFetch = (url) => {
    
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const urlData = await ApiRequest(url);
        setData(urlData);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, [url]);

    return {
        data, 
        isLoading
    };
};