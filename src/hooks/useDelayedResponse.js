import {useEffect, useState} from 'react'


export const useDelayedResponse = (data, delay = 1000) => {

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => setLoading(false), delay);
  
        return () => {
          clearTimeout(timeoutId)
        }
    }, []);
  
  
    return { loading, data: loading ? undefined : data}
}