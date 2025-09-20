import React, { useState } from 'react';
import axios from 'axios';

const PostWithAxios = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {  
    e.preventDefault();

    const postData = {
      title: title,
      body: body,
      userId: 1
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(res => {
        setResponse(res.data);
        console.log('Response:', res.data);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Create a Post (Axios)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: '10px' }}
        /><br/>
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          cols="50"
        /><br/>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostWithAxios;
