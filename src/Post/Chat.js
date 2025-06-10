import React, { useState } from 'react'
import axios from "axios";

function Chat() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response,setResponse] =useState(null);
    const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:title,
            body:body,
        });
        setResponse(res.data);

    }
    catch(error){
        console.log("Errir is ",error)
    }

    }
    console.log(response,"Res")
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <p>
            <strong>Title:</strong> {response.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default Chat
