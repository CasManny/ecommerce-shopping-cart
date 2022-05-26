import React from 'react'
import './Newsletterstyles.css'

const NewsLetter = () => {
  return (
      <div className="newsletter__container">
          <div className="newsletter__container-details">
              <h1 className='newsletter__h1'>Sign up to our Newsletter</h1>
              <p className='newsletter__p'>subscribe to recieve regular news and offers. you can unsubscribe at anytime...</p>
              <div className="newsletter__customer-info">
                  <input className='newsletter__input' type="text" placeholder='Enter your Email' />
                  <button className="newsletter__subscribebtn">subscribe</button>
              </div>
          </div>
      </div>
  )
}

export default NewsLetter