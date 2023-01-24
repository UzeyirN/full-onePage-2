import React from 'react'
import "../HeroSection/HeroSection.css"

const HeroSection = () => {
    return (
        <>

            <div className='herosec-wrapper'>
                <div className='herosec-left'>
                    <div className='herophoto-wrapper'>
                    </div>
                </div>
                <div className='herosec-right'>
                    <div className='herosec-content'>
                        <h2 style={{color:"black"}}>Shop is fun</h2>
                        <h1 style={{color:"black",fontWeight:"800"}}>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, totam? Ad, maiores quidem omnis molestias quasi tempora sed veniam sunt odit ut atque natus debitis illo magni repellat consequuntur itaque exercitationem quis enim? Nostrum facere libero, dolore dolorum voluptas tempore?</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection