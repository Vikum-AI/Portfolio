import React from 'react'
import '../Styles/main.css'

import image from '../Assets/20201113_000653-1.png'

export default function main() {
    return (
        <div className='main'>
            
           {/* <iframe src="https://embed.lottiefiles.com/animation/65012"></iframe> */}
           <div className="info">
               <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, autem eaque. Illo, id? Facilis, labore. Itaque, ullam sapiente soluta nemo molestiae velit voluptates labore illo. </p>
           </div>

           <img src = { image } alt="" />

        </div>
    )
}
