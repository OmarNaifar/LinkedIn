import React from 'react'
import './LoadingPosts.css'
function Loadingpost() {
  return (
    
         <div  className='loadingpost'>
        <div className='loadingpost_header'>
            <div className='loadingpost_avatar'></div>
            <div  className='loadingpost_info'>
                <div className='loadingpost_name'></div>
                <div className='loadingpost_description'></div>
            </div>
        </div>

        
        <div className='loadingpost_buttons'>
            <div className='loadingpost_button'></div>
            <div className='loadingpost_button'></div>
            <div className='loadingpost_button'></div>

        </div>
    </div>
    
  )
}

export default Loadingpost