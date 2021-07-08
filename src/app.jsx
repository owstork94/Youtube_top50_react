import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Video_detail from './components/video_detail/video_detail';
import Video_list from './components/video_list/video_list';
import Video_search from './components/video_search_header/video_search_header';

function App({youtube}) {
  const [videos, setvideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);
  const search = query => {

    youtube
    .search(query)
    .then(videos => setvideos(videos))
  }
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => 
  //       result.items.map(item => ({...item, id: item.id.videoId}))
  //     )
  //     .then(items => setvideos(items))
  //     .catch(error => console.log('error', error));
  // };


  useEffect(()=>{
   youtube
   .mostPupular()
   .then(videos => setvideos(videos))
  },[]);
  
  const selectvideo = (video) => {
  setselectedVideo(video);
  }

   // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY", 
    // requestOptions)
    //   .then(response => response.json())
    //   .then(result => setvideos(result.items))
    //   .catch(error => console.log('error', error));
    
//////////////////////////////////////////////////////////////////////////////
 
// onClick(()=>{

  //   var requestOptions = {

  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&part=snippet&maxResults=25&q=침착맨&type=video&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY", requestOptions)
  //     .then(response => response.json())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));

  // })

  return (
  <div className={styles.app}>
  <Video_search onSearch={search} />
  {selectedVideo && <Video_detail videoo={selectedVideo}/>}
  <Video_list videos={videos} onVideoClick = {selectvideo} />
  </div>
  
  )
  
}

export default App;
