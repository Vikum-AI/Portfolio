import React from 'react'
import Avatar from '../Assets/avatar-removebg-preview.png'
import avatar from '../Assets/PhotoFunia-1640344127-removebg-preview.png'

import '../Styles/banner2.css'

export default function banner2() {
    return (
        <div className='banner2'>

            <img src= { Avatar } alt="" />

            <div className="des">
                <div className="text">
                    <p> Students’ favorite teacher and the Parents’ most trusted educator for more than 10 years </p>
                <p>Teaching is my passion. Getting better at it – that's my job.</p>
                <button> Find out more </button> 
                
                </div>
                
                <div className="rocket">
                   <iframe className='rockett' src="https://embed.lottiefiles.com/animation/88282"></iframe>
                </div>
            </div>
            
            
        </div>
    )
}
