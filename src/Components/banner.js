import React from 'react'
import '../Styles/banner.css'

export default function banner() {
    return (
        <div className='banner'>
            
            <div className="bannerMain">

                <div className="title">

                    <h1 className='first'> Be </h1>

                    <h1 className='second'>  Innovative </h1>

                    <div className="bg"></div>

                </div>

                <div className="info">
                    
                    {/* <span class="material-icons">trending_up</span> */}
                    <i class="fas fa-chevron-right"></i>
                    <p> Crafting a better vision through education and technology </p>

                </div>                 

                <div className="scroll">

                    <p> Scroll </p>
                    

                </div>

                <div className="line"></div>

            </div>

           
           

        
        </div>
    )
}
