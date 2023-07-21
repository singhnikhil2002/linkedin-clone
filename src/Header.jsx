import React from "react";
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import Notification from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat'


const Header = () => {
  return (
    <div className="header">

      <div className="header__left">
        <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="" />

        <div className="header__search">
            <SearchIcon/>
            <input type="text" />
        </div>
      </div>
      <div className="header__right">
       <HeaderOption Icon={HomeIcon} title="Home"/>
       <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
       <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
       <HeaderOption Icon={ChatIcon} title='Messaging'/>
       <HeaderOption Icon={Notification} title='Notification'/>
       <HeaderOption avatar='https://media.licdn.com/dms/image/C4E03AQGlPptUC7P7fA/profile-displayphoto-shrink_100_100/0/1642305874276?e=1695254400&v=beta&t=NkFtllgtYTjoozbhKtQYlQzWOE2uUt1KLmN0gHfO-pk' title='me'/>
      </div>
    </div>
  );
};

export default Header;
