import React, { useEffect, useState } from 'react'


import { useSelector } from 'react-redux'
import CreateIcon from'@mui/icons-material/Create'
import firebase from 'firebase/compat/app';
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import 'firebase/compat/firestore';
import './Account.css'
import { selectUser } from './features/userSlice'
import InputOption from './InputOption'
import { db } from './FireBase'
import { Avatar } from '@mui/material';
import background from "./background.jpg"
import Loadingposts from './LoadingPosts';
import FlipMove from 'react-flip-move';
import { BrowserRouter,Link, Route, Router, Routes } from 'react-router-dom';

import Post from './Post';
function Account() {
    const user=useSelector(selectUser)
    const[input,setInput]=useState('')
    const[posts, setPosts] = useState([ ]);
    const[ex, setEx] = useState(0);
    const[post, setPost] = useState(10);
    const [expanded, setExpanded] = useState(false)
    const [loading, setLoading] = useState(true);
    const dataForDisplay = expanded ? posts : posts.slice(ex, post)
    const sendPost = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            description:String (Date( firebase.firestore.FieldValue.serverTimestamp())).split(' ', 5).pop().split(':',2).join(':'),
            message:input,
            photoURL:user.photoURL,
        });
        setInput("");

    };
    useEffect(()=>{
        
      if(posts.length== 0){
         
          setLoading(true);
          console.log(loading)
          // console.log(posts)
          
      }
      else {
          setLoading(false)
          console.log(loading)
      }

  })
  useEffect(()=>{
      db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>
          setPosts(snapshot.docs.map(doc => (
              {
                  id: doc.id,
                  data:doc.data(),
              })
              )
          )
          
      )
     
  }
  ,[]);
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
    const postFunction=()=>{
      
      if(loading==true){
          return(<div>
             

              <Loadingposts/>
              
              </div>
          )
      }
      else return(
           
        <FlipMove  >
{dataForDisplay.map(({id,data:{name,description,message,photoURL}})=>{
  if(name==user.displayName)
  return(
    <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoURL={photoURL}
    />
  )
})
}
<div className='showall'>
<button type="button"   onClick={() => setPost(post+10) && setEx(ex+10)}>
  Show More
</button>
<button type="button" onClick={() => setExpanded(!expanded)}>
  {expanded ? 'Show Less' : 'Show All'} 
</button>
</div>
</FlipMove>


)

      
    
    }
  return (
    <div className='account'>
        <div className='account_details'>
                   
                    <img  src={background} alt="" />
                    <div className='account_inf'>
                        <div className='avatar_account'>
                        <Avatar className='account_avatar'src={pdp}>{pdp}</Avatar> 
                        {/* <Avatar src={omar}className='sidebar_back' />   */}
                        </div> 
                        <div className='account_info'>         
                            <h2>{user.displayName}</h2>
                            <h4>{user.email}</h4>
                            <div className='followers'>
                    {/* <button className='follow_button'>Follow</button>
                    <div className='nb_followers'>
                      <h3>1k</h3> 
                      <h3>Followers</h3>  
                    </div>   */}
                   </div>
                        </div>
                        
                        </div>
                   
                  
        </div>
        <div className='account_inputContainer'>
            <div className='Input'>
              <h2> </h2>
            </div>
            <div className='account_input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}type="text" placeholder='Post something'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='account_options'>
                <InputOption Icon={ImageIcon} color='#70b5f9' title='Photo'/>
                <InputOption Icon={SubscriptionsIcon} color='#E7a33e' title='Video'/>
                <InputOption Icon={EventNoteIcon} color='#c37d16' title='Event'/>
                <InputOption Icon={CalendarViewDayIcon} color='#f16745' title='Write an article'/>
            </div>
        </div>
        
        
          
        {postFunction()}
          
          
    </div>
  )
}

export default Account