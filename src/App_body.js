import React from 'react'

import './App.css'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
function App_body() {
  return (
    
    <div className="app_body">
      
        <Sidebar/>
        <Feed/>
        <Widgets/>
    </div>
    
  )
}

export default App_body