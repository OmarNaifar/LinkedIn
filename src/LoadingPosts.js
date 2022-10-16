import React from 'react'
import Loadingpost from './LoadingPost'
import './LoadingPosts.css'
function Loadingposts() {
  return (
    
    <div >
        <div className='loadingloaderdiv' >
        <div className='loadingloader' >
            
            <div className="loader"></div>
            </div>
            </div>
        <Loadingpost/>
        <Loadingpost/>
        <Loadingpost/>
        <Loadingpost/>
        <Loadingpost/>
        
    </div>
    
  )
}

export default Loadingposts