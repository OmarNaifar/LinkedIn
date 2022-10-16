import React, { useEffect, useState } from 'react'
import './feed.css'
import CreateIcon from'@mui/icons-material/Create'
import firebase from 'firebase/compat/app';
import InputOption from './InputOption'
import 'firebase/compat/firestore';

import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import omar from './omarnc.png';
import { db } from './FireBase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import LoadingPosts from './LoadingPosts';
import Header from './Header';
import { alertTitleClasses } from '@mui/material';
function Feed() {
    const user=useSelector(selectUser)
    const[input,setInput]=useState('')
    const[posts, setPosts] = useState([ ]);
    const[ex, setEx] = useState(0);
    const[post, setPost] = useState(10);
    const [expanded, setExpanded] = useState(false)
    const [loading, setLoading] = useState(true);
    const dataForDisplay = expanded ? posts : posts.slice(ex, post)

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

    const sendPost = (e) =>{
        e.preventDefault();
        if( input.trim().split(/ +/).join(" ") !== ''){
            // console.log( )
            db.collection('posts').add({
                name:user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    
                description:String (Date( firebase.firestore.FieldValue.serverTimestamp())).split(' ', 5).pop().split(':',2).join(':'),
                message:input,
                photoURL:user.photoURL,
            });
        setInput("");
        }
        else alert('post cannot be empty')
    };
    
    const postFunction=()=>{
        if(loading==true){
            return(<div>
                <FlipMove>

                <LoadingPosts/>
                </FlipMove>
                </div>
            )
        }
        else return(
           
                <FlipMove  >
        {dataForDisplay.map(({id,data:{name,description,message,photoURL}})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
            />
        ))
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
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed_options'>
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

export default Feed