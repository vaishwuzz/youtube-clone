import React from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
    return (
        <div className="header">
        <div className="header_left">
        <MenuIcon />
        <img 
        className = "header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg" 
        alt=""/>
        </div>

        <div className="header_input">
        <input placeholder="Search" type = "text"/>
        <SearchIcon className="header_inputButton" />
        </div>


        <div className="header_icons">
       
        <VideoCallIcon className="header_icons" />
        <AppsIcon className="header_icons"/>
        <NotificationsIcon className ="header_icons"/>
        <AccountCircleIcon
        alt = ""
        src = ""
        />
        </div>
        </div>
    );
}

export default Header;
