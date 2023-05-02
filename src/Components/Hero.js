import React from 'react'
import './Hero.css'
import Crypto from '../Assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* Left Side */}
            <div className='left'>
                <p>Buy & Sell Crypto 24/7 with your retirement account</p>
                <h1>Invest in Cryptocurrency with Your IRA</h1>
                <p>Buy, Sell & Store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email'/>
                    <button className='btn'>Learn More</button> 
                </div>
            </div>


            {/* Right Side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt=''/>
                </div>
                </div>
        </div>

    </div>
  )
}

export default Hero