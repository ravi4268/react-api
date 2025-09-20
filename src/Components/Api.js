import React, { useState } from 'react';

const Api = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [response, setResponse] = useState(null);

const handleSubmit = async (e) => {
e.preventDefault();

const query = new URLSearchParams({
title: title,
body: body
}).toString();
    
try {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?${query}`, {
method: "GET",
headers: {
"Content-Type": "application/json"
}
});

const data = await res.json();
setResponse(data);
console.log("Response Data:", data);
} catch (error) {
console.error("Error:", error);
}
};

return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>Fetch Data (GET Request)</h1>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Title" value={title}onChange={(e) => setTitle(e.target.value)} style={{ marginBottom: '10px' }}/>
<br />

<textarean placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} rows="4" cols="50"/>
<br />

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

export default Api;
