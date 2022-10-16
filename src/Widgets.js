import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon  from '@mui/icons-material/FiberManualRecord';
function Widgets() {
  const newArticle=(heading,subtitles)=>(
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon/>
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitles}</p>
      </div>
      
    </div>
  )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newArticle("Omar Naifar yetaalam React","besh yatya7 al LinkedIn")}
      {newArticle("Omar Naifar yetaalam React","besh yatya7 al LinkedIn")}
      {newArticle("Omar Naifar yetaalam React","besh yatya7 al LinkedIn")}
      {newArticle("Omar Naifar yetaalam React","besh yatya7 al LinkedIn")}
      {newArticle("Omar Naifar yetaalam React","besh yatya7 al LinkedIn")}
    </div>
  )
}

export default Widgets