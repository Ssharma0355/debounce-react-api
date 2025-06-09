import { useEffect, useState } from "react";

export function UseDebounce(value, delay){


    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceValue(value);
        },delay);
        return ()=>{
            clearTimeout(handler);
        }

    },[value, delay])

    return debounceValue;


}