import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
import  ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import SendIcon from '@mui/icons-material/Send';

import { Avatar } from '@mui/material'
import React,{forwardRef}from 'react'
import InputOption from './InputOption'
import './Post.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { BrowserRouter,Link, Route, Router, Routes } from 'react-router-dom';

    const Post = forwardRef(({name,description,message,photoURL},ref) =>{
    const user=useSelector(selectUser)
   

  
    return (
    <div ref={ref} className='post'>
        <div className='post_header'>
        <Link style={{textDecorationLine:"none"}} className="post_info_avatar" to={'/'+name}> <Avatar src={photoURL}>{name[0]}</Avatar></Link>
            <div  className='post_info'>
                <h2><Link className="post_info_h2" to='/account'>{name}</Link></h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
            <InputOption Icon={CommentIcon} title="Comment"/>
            <InputOption Icon={ReplyIcon} title="Share"/>
            <InputOption Icon={SendIcon} title="Send"/>
        </div>
    </div>
  )
})

export default Post