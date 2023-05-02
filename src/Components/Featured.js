import React from 'react'
import './Featured.css'
import {FiArrowRight, FiArrowDown} from 'react-icons/fi' 

const Featured = () => {

    

  return (
    <div className='featured'>
        <div className='container'>
            {/* Left */}
            <div className='left'>
                <h2>Explore top Cryptocurrencies like Bitcoin, Ehereum, Shiba Inu</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className='btn'> See More Coins</button>
            </div>
            {/* Right */}
            <div className='right'>
                <div className='top'>
                    <img src= {} alt=''/>
                </div>
                <div>
                <h5>Bitcoin</h5>
                <p>£30,000</p>
                </div>
                <span><FiArrowRight/>2.5%</span>
            </div>

        </div>
    </div>
  )
}

export default Featured