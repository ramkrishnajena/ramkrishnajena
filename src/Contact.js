import React from 'react'
import './Contact.css'
import linkedin from './asset/linkedin.svg'
import { Link } from 'react-router-dom'
import { useState } from "react"


function Contact() {




    return (
        <>
            <div className='heading'><h2 >Contact</h2></div>
            <div className='contact-us'>
                <form className='c-form'>
                    <input type='text' className='name' placeholder="Name" required />
                    <input type="email" className='email' placeholder="Email" required />
                    <input type="text" className='subject' placeholder="Subject" required />
                    <textarea type="text" className='messages' placeholder="Message" required />
                    <input type="button" className='submit-btn' value='Submit' />
                </form>
                <div className='heading-bottom'>
                    <div className='contact'>Get in touch</div>
                    <div className='social-profile'>

                    </div>
                    <div className='contact-details'>
                        <div className='email'><p>contact@ramkrishnajena.com</p><img className='mail-img' src="https://img.icons8.com/fluency/48/000000/new-post.png" /></div>
                        <div className='linkedin'><p>Ramkrishnajena</p><img className='mail-img' src={linkedin} /></div>
                        <div className='address'><p>Banglore</p><img className='location-img' src="https://img.icons8.com/arcade/64/000000/experimental-marker-arcade.png" /></div>
                    </div>
                </div>

                <div className='back-btn'><Link to="/">
                    <div className='back-img'><img src="https://img.icons8.com/pastel-glyph/64/000000/circled-left.png" /></div></Link></div>
            </div>

        </>
    )
}

export default Contact