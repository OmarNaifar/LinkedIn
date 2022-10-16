import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './FireBase';
import './login.css'
function Login() {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch= useDispatch();
    const  register = async (e)=>{
        e.preventDefault();
       if(!name){
        
        return alert("please enter a full name!");
       }
       await auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth)=>{
        
        userAuth.user.updateProfile({
            displayName:name,
            photoURL:profilePic,
        })
        .then(()=>{
            
            dispatch(login({
               email:userAuth.user.email,
               uid: userAuth.user.uid,
               displayName:userAuth.user.displayName,
               photoURL:userAuth.user.photoURL, 
            }))
        })
       }).catch(error=> alert(error.message));
    };
    const logintoApp=async(e)=>{
        e.preventDefault();
        await auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
             dispatch(
                login({
                    email:userAuth.user.email,
               uid: userAuth.user.uid,
               displayName:userAuth.user.displayName,
               photoURL:userAuth.user.photoURL, 
                })
            );
        })
        .catch((error)=>alert(error))
    };
    
  return (
    <div  className='login'>
        <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png" alt="" />
    
        <form>
            <input type="text" value={name} 
            onChange={e=>setName(e.target.value)}
            placeholder='Full name (Required in Register)' />

            <input type="text"value={profilePic}
             onChange={e=>setProfilePic(e.target.value)} 
             placeholder='Profile pic URL ' />

            <input type="email"value={email}
             onChange={e=>setEmail(e.target.value)}
             placeholder='Email' />

            <input type="password"value={password} 
            onChange={e=>setPassword(e.target.value)}
            placeholder='Password' />

            <button type='submit' onClick={logintoApp}>Sign In</button>
        </form>
        <p>Not a member ?
            <span className='login_register'onClick={register}
            > Register Now</span>
        </p>

    </div>
  )
}

export default Login