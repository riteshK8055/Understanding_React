import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'

const VideoContainer = () => {
  

 const [videos , setVideos] = useState([]);

  const getVideos = async () => {

    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
   
  
  useEffect(() => {

    getVideos();
  } , [])

  return (
    <div className="flex flex-wrap max-h-screen ">
        
        {videos.length > 0 ? (
        videos.map(video => <VideoCard info={video} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>


  )
}

export default VideoContainer;