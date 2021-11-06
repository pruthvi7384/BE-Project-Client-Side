import React from 'react'
import { Link } from 'react-router-dom'
import './Bot.css'
function Bot() {
    return (
        <div className="bot_icon">
           <Link to="/chat"><i className="fas fa-user-md"></i></Link>
        </div>
      
    )
}

export default Bot
