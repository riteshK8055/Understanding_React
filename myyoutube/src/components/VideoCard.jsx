import React from 'react'

const VideoCard = ({info}) => {

  console.log(info);
   const {snippet ,statistics} = info;
   const {thumbnails , channelTitle , title } = snippet;
  return (
    <div className=" w-80 shadow-lg p-2 m-2 rounded-md" >
      {<img src={thumbnails.medium.url} alt="video" /> }
      <ul>
      <li className="font-bold text-wrap">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
      
      
      </ul>
    </div>
  )
}

export default VideoCard