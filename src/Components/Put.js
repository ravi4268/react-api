import React, { useState } from "react";

const PutApi = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      title: title,
      body: body,
      userId: 2,
    };  
    
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT", // PUT And PATCH API Request Of This Code
        headers: {                    
         "Content-Type": "application/json",
        },   
        body: JSON.stringify(updatedData),
      });    
              
      const data = await res.json();
      setResponse(data);
    } catch (error) {     
      console.error("Error:", error);
    }
  };
  
 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>PUT API Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Update Post</button>
      </form>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h3>Updated Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          
        </div>
      )}
    </div>

    
  );
};

export default PutApi;
