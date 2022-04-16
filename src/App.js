import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Dhaka" special="Tanjim Hasan"></District>
      <District name="Borisal" special="Tech Tree"></District>
      <District name="Khulna" special="Amir khan"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props) {
  return (
    <div className='Postss'>
      <h2>Posts: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}
function District(props) {
  const [power, setPower] = useState([1]);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }

  return (
    <div className='Districts'>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}
export default App;
