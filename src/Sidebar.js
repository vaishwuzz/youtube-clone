import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import  './SidebarRow.css';

function Sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title ="Home" />
        <SidebarRow Icon={WhatshotIcon} title = "Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title = "Subsciption"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title ="Library" />
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbsUpDownOutlinedIcon} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>

         <hr/>

        </div>
    )
}

export default Sidebar;