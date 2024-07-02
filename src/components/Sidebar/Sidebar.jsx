import React, { useState } from 'react'
import './Sidebar.css'
import menu_icon from '../../assets/menu-icon.jpg'
import plus_icon from '../../assets/plus-icon1.jpg'
import message_icon from '../../assets/message-icon.jpg'
import question_icon from '../../assets/question-icon.jpg'
import history_icon from '../../assets/history-icon.png'
import setting_icon from '../../assets/setting-icon.png'

const Sidebar = () => {

    const [extended,setExtended] = useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={menu_icon} alt="" />
            <div className="new-chat">
                <img src={plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ?
            <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={message_icon} alt="" />
                <p>What is react ....</p>
            </div>
        </div>
        : null
        }
            
        </div>
        <div className="botton">
            <div className="bottom-item recent-entry">
                <img src={question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar