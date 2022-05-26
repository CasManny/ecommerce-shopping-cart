import React from 'react'
import './heroStyle.css'
import HeroImage from '../../Assets/Shoe-5.jpg'
import { Link } from 'react-router-dom'

const Heropage = () => {
  return (
    <section>
      <div className='hero__container'>
        <div className="hero__container-introduction">
          <h1>Get Quality Men's stocks</h1>
          <p>Look smart, different and don't forget to win the Ladies Heart ;)</p>
          <div className="hero__container-introduction__btn-container">
            <button className="buy">
              <Link to='/stocks'>View Products</Link>
            </button>
          </div>
        </div>
        <div className="hero__container-imgcontainer">
          <img src={HeroImage} alt="Hero image" />
        </div>
      </div>
    </section>
  )
}

export default Heropage
