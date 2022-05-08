import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => {
            if (!response.ok){
                setIsPending(false);
                throw new Error(`Can't fetch data from ${url}`);
            }

            return response.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
        .catch(err => {
            if(err){
                setError(`Can't fetch data from ${url} ${err.message}`);
                setIsPending(false);
            }
        });
    }, [url]);

    return { data, isPending, error };
}
 
export default useFetch;