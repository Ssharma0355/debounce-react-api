import React, { useEffect, useState } from 'react'
import { useDebounce } from './hooks/useDebounce';

function SearchBar() {
  const [seachItem, setSearchItem] = useState('');
  const [searching, setSearching] = useState(true);
   const [results, setResults] = useState([]);
  console.log(seachItem);
  // Debounce search item so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  const debouncedSearchTerm = useDebounce(seachItem, 500);

  useEffect(()=>{
    if (debouncedSearchTerm) {
      setSearching(true);
      searchCharacters(debouncedSearchTerm).then((result) => {
        setSearching(false);
        setResults(result);
      });
    } else {
      setResults([]);
    }
  },[debouncedSearchTerm]); // Only call effect if debounced search term changes

  console.log(results);
  const searchCharacters = async(search)=>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
        const data = response.json();
        return data;
    }
    catch(err){
       console.error("Error fetching data: ", err);
       return [];
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSearchItem(e.target.value)} />

      {searching && <div> Searching... </div>}
      {results.length > 0 && (
        <div>
          <h2>Resultss</h2>
          <ul>
            {results.map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar
