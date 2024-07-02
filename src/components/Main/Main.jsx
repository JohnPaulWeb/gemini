import React from 'react'
import './Main.css'
import user_icon from '../../assets/user-icon.jpg'
import compass_icon from '../../assets/compass-icon.jpg'
import bulb_icon from '../../assets/bulb-icon.jpg'
import massage_icon from '../../assets/massage-icon.png'
import code_icon from '../../assets/code-icon.png'
import gallery_icon from '../../assets/gallery-icon.png'
import mic_icon from '../../assets/mic-icon.jpg'
import send_icon from '../../assets/send-icon.png'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, John Paul.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Philippines </p>
                    <img src={compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Kung masaya kana edi masaya na rin ako i hope you okay</p>
                    <img src={bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Kung masaya kana edi masaya na rin ako i hope you okay</p>
                    <img src={massage_icon} alt="" />
                </div>
                <div className="card">
                    <p>Kung masaya kana edi masaya na rin ako i hope you okay</p>
                    <img src={code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={gallery_icon} alt="" />
                        <img src={mic_icon} alt="" />
                        <img src={send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                Gemini may display gives information for people they search based on there they want
            </p>
            </div>
        </div>
    </div>
  )
}

export default Main