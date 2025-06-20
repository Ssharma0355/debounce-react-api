import { useEffect, useState } from 'react'

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {

     const handler = setTimeout(()=>{
        setDebounceValue(value);
     },delay)

     return()=>{
        clearTimeout(handler);
     }
  },[value, delay]);
  return debounceValue;
}

