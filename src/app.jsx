import React, { useEffect, useState } from 'react';
import './app.css';
import Video_list from './components/video_list/video_list';

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY", 
    requestOptions)
      .then(response => response.json())
      .then(result => setvideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <Video_list videos={videos}/>
  )
  
}

export default App;
