import React from 'react'
import '../Styles/special.css'
import chemistry from '../Assets/chromatograph-_whop2XD0Mk-unsplash.jpg'
import business from '../Assets/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import icon1 from '../Assets/3700472-biology-chemical-chemistry-ecology-flask-laboratory-science_108761.svg'
import icon2 from '../Assets/3700459-chemical-chemistry-education-flask-science-test-tube_108750.svg'
import * as LottiePlayer from "@lottiefiles/lottie-player";


export default function special() {
    return (
        <div className='special'>

            <div className="teaching">
                <h1> My Teaching specializations </h1>
            </div>
            
            <div className="bg2"></div>

            {/* <div className="pics">
                <div className="card">
                <img src= { chemistry } alt="" />
            </div>

            <div className="card">
                <img src= { business } alt="" />
            </div>

            </div> */}
            <div className="cards">

                <div className="card">
                    
                    <div className="player">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets3.lottiefiles.com/private_files/lf30_zwfogfnj.json"
                            className='chem'
                        ></lottie-player>
                        
                    </div>
                    <h2 className='chemm'> Chemistry </h2>
                </div>

                <div className="card">
                    <h2> Business</h2>
                    <div className="player2">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets5.lottiefiles.com/packages/lf20_qwATcU.json"
                            className='chem'
                        ></lottie-player>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
