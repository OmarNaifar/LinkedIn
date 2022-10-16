import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css'
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './FireBase';
import Widgets from './Widgets';
import App_body from './App_body';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Account from './Account';

function App() {
  const user= useSelector(selectUser)
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,
        }))
      }else{
        dispatch(logout()); 
      }
    });
  },[])
  
  return (
    
    <div  className='app'>
      <>
      {console.log(user)}
         <Header/>
          { !user ? (
          
              <Login/>
          
          
         ):(
          
          <Routes>
           <Route exact path={'/'} element={<App_body />} />
           <Route exact path={"account"} element={<Account />} />
          </Routes>
           )

        }
      
        </>
    </div>
    
  );
}

export default App;
