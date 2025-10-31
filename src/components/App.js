
import React,{useMemo,useEffect,useState} from "react";
import './../styles/App.css';

const App = () => {
  const [posts,setPosts]=useState([]);
  const url="https://jsonplaceholder.typicode.com/posts";
  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>setPosts(data))
    .catch((error)=>console.error("Error fetching users:",error))
  }
    ,[]);
  const cachedPosts=useMemo(()=>{
    console.log("Memoizing Posts");
    return posts;
  },[posts]);

  return (
    <div>
      <ul>
        {/* Do not remove the main div */}
        {cachedPosts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          cachedPosts.map((post, index) => (
            <li key={index}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App
