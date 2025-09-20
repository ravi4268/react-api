import React, { useState, useEffect } from 'react';

const GetDataComponent = () => {
  const [data, setData] = useState([]);
  
  // GET method
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts') // API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Call the GET method on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{textAlign: "center"}}>
      <h2>Data from API</h2>
      <ul style={{listStyle: "none", padding: 0}}>
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetDataComponent;
