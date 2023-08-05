import React from "react";
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import Notification from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";


const Header = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

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
       <HeaderOption avatar= {true} 
       title='me'
       onClick={logoutOfApp}
       />
      </div>
    </div>
  );
};

export default Header;
