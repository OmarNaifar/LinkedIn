import React, { useEffect, useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BrowserRouter,Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './FireBase';
function Header() {
 
  const user= useSelector(selectUser)
  const dispatch=useDispatch();
  // const userPdp
  const logoutofApp = () =>{
    //

    dispatch(logout());
    auth.signOut();
    
  };
  return (
    <div className='header'>
        
        <div className='header_left'>
        <NavLink className='header_left' to='/'style={{textDecorationLine:"none"}}><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""/></NavLink>
            
        
            <div className='header_search'>
                <SearchIcon/>
                
                <input type="text" placeholder='Search' />
            </div>
            </div>
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon}link='/' title='home'></HeaderOption>
            <HeaderOption Icon={SupervisorAccountIcon}title='My Network'/>
            <HeaderOption Icon={WorkIcon} title='Jobs'/>
            <HeaderOption Icon={SendIcon}title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon}title='Notification'/>
            <HeaderOption avatar={true}onClick={logoutofApp}title='Me'/>
        </div>
    </div>
  )
}

export default Header;