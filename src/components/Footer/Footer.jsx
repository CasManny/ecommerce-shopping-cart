import React from 'react'
import './footerstyles.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const menu = [
    {
        title: 'Catalogue',
        url: '/catalogue'
    },
    {
        title: 'Contact us',
        url: '/contactus'
    },
    {
        title: 'FAQs',
        url: '/faqs'
    },

]
const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__social-media">
          <p className="footer__social-media__icon"><FacebookOutlinedIcon /></p>
          <p className="footer__social-media__icon">instagram</p>
          <p className="footer__social-media__icon">twitter</p>
      </div>
      <div className="footer__menu">
          {menu.map((item) => (
              <p key={item.title} className="footer__menu-item">{item.title}</p>
          ))}
      </div>
    </div>
  )
}

export default Footer
