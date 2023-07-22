import React, { useState } from 'react'
import './feed.css'
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

const Feed = () => {
  const [posts,setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  }
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} color='#70B5F9' title="Photo"/>
            <InputOption Icon={SubscriptionIcon} color='#E7A33E' title="Video"/>
            <InputOption Icon={EventNoteIcon} color='#C0CBCD' title="Event"/>
            <InputOption Icon={CalenderViewDayIcon} color='#7FC15E' title="Write article"/>
        </div>
      </div>

      {/* Post */}
      {posts.map((post)=> (
        <Post />
      ))}
      <Post name='Nikhil Singh' description='This is a test' message='Wow this post'/>
    </div>
  )
}

export default Feed
