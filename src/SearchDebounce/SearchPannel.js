import React, { useEffect, useState } from 'react'
import { UseDebounce } from './UseDebounce';

function SearchPannel() {
   const [searchValue, setSearchValue] = useState('');
   const [results, setResults] = useState([]);

   const debouncedSearch = UseDebounce(searchValue, 500);

   useEffect(() => {
     if (debouncedSearch) {
       searchTheValue(debouncedSearch).then((res) => setResults(res));
     }
   }, [debouncedSearch]);

   const searchTheValue = async (search)=>{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${search}`
    );
    const data = response.json();
    return data;
   }

   console.log(results,"resultsss")

  return (
    <div>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />

      {results.length > 0 && (
        <div>
          <h1>Results </h1>
          <ul>
            {results.map((posts) => (
                <li key={posts.id}>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchPannel
