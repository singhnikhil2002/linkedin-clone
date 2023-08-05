import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

const Widgets = () => {
    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This is Clone" , "Created by Nikhil Singh at 5th Aug,23")}
      {newsArticle("Sonny Songha" , "Followed his tutorial")}
      {newsArticle("React" , "Build using React.js")}
      {newsArticle("Redux" , "Redux is so damm cool")}
    </div>
  )
}

export default Widgets
