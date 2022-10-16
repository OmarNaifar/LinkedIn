import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './sidebar.css'
import background from "./background.jpg"
import omar from './omarnc.png';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user=useSelector(selectUser)
    const recentItem =(topic)=>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    const [pdp,setPdp]=useState("sd");
    useEffect(()=>{
       if(user?.photoURL){
        setPdp(user.photoURL);
       }
        else if(user.photoURL==null){
            if(user.displayName==null){
                console.log('pdp')
                setPdp(null);
            }
            else{console.log(user.displayName[0]);
                setPdp(user.displayName[0])}
        }
        
    });
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
           
                    <img src={background} alt="" />
                    <div className='avatar'>
                        <Avatar className='sidebar_avatar'src={pdp}>{pdp}</Avatar> 
                        {/* <Avatar src={omar}className='sidebar_back' />   */}
                    </div> 
            <div className='sidebar_text'>         
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
        </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>who viewed you</p>
                <p className='sidebar_statNumber'>545</p>
            </div>  
            <div className='sidebar_stat'>
                <p>who viewed you</p>
                <p className='sidebar_statNumber'>2,546</p>
            </div>
        </div> 
        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('SoftwareEngineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar;