import React, { useState } from 'react'

const Delete = () => {
    const[message,setMessage] = useState("");
    const handleDelete = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE", // DELETE request
      });

      if (res.status === 200) {
        setMessage("Post deleted successfully!");
      } else {
        setMessage("Failed to delete post.");
      }
    } catch (error) {      
      console.error("Error:", error);
      setMessage("Error deleting post.");
    }
  };
  

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DELETE API Example</h1>
      <button onClick={handleDelete}>Delete Post</button>
      <p>{message}</p>
    </div>
    </>

  )
}    

export default Delete