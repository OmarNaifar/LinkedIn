import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOption.css'
import { BrowserRouter,Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import Header from './Header'

function HeaderOption({link,avatar,Icon,title,onClick,name}) {
  const user=useSelector(selectUser)

  const [pdp,setPdp]=useState("");
  useEffect(()=>{
    if(user==null){
      console.log('dinbouk')
      setPdp(null);
    }
     else if(user.photoURL!=null){
      setPdp(user.photoURL);
     }
      else if(user.photoURL==null){
          if(user.displayName==null){
              console.log('pdp')
              setPdp('');
          }
          else{console.log(user.displayName[0]);
              setPdp(user.displayName[0])}
      }
      
  });
  return (
    <div onClick={onClick} ><NavLink className='headerOption' to={link}style={{textDecorationLine:"none"}}>
         {Icon && <Icon className="headerOption_icon"/>}
         {avatar && <Avatar className='headerOption_icon'src={pdp} >{pdp}</Avatar>}
         <h3 className="headerOption_title">{title}</h3> </NavLink>
    </div>
  )
}

export default HeaderOption