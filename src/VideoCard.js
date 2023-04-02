import Avatar from '@mui/material/Avatar';
import React from "react";
import "./VideoCard.css";


function VideoCard({image, title, views, timestamp, channelImage, channel}){
return (
    <div className ="VideoCard">
    <img className = "VideoCard_thumbnail" src={image} alt="" />
    <div className ="VideoCard_info">
        <Avatar
            className = "VideoCard_avatar"
            alt={channel}
            src={channelImage}
            />
    <div className = "Video_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
            {views} . {timestamp}
        </p>
    </div>
    </div>
    </div>
    );
}

export default VideoCard;
