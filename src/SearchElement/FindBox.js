import React, { use, useEffect, useState } from 'react'
import { useDebounce } from './useDebounce';

function FindBox() {
    const [searchItem ,setSearchItem] = useState('');
    const [results,setResults] = useState([]);

    const debouncedValue = useDebounce(searchItem, 500);
    const searchValue = async (query) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${query}`
        );
        const data = res.json();
        return data;
    };

    useEffect(() => {
      if (debouncedValue) {
        searchValue(debouncedValue).then((response) => setResults(response));
      }
    }, [debouncedValue]);
    console.log(results);
  return (
    <div>
        <input type="text" value={searchItem} onChange={e => setSearchItem(e.target.value)} />
      
    </div>
  )
}

export default FindBox
