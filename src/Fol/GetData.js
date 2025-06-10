import axios from 'axios';
import React, { useState } from 'react'

function GetData() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [result,setResult] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(
              "https://jsonplaceholder.typicode.com/posts",{
                title:title,
                body:body
              }
            )
            setResult(res.data);
        }
        catch(err){
            console.log("Error is ",err);
        }
    }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />

      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <br />

      <button onClick={handleSubmit}>Submit here!</button>

      {result && (
        <div>
          <h1>Title : {result.title}</h1>
          <p>Body : {result.body}</p>
        </div>
      )}
    </div>
  );
}

export default GetData
