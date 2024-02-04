import React from 'react'
import './MailList.css'

export const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Always Thinking The Best For You</h1>
      <span className="mailDesc">Sign Up And We Will Send The Best Deals To You</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Enter Your Email'/>
        <button>SubScribe</button>
      </div>
    </div>
  )
}

export default MailList