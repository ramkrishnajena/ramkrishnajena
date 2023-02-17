import React from 'react'
import './FrontPage.css'
import right from '../src/asset/right.svg'
import { Link } from 'react-router-dom'

function FrontPage() {
    return (
        <div className='front-page'>
            <div className='left-text'>
                <h2>Hi,</h2>
                <h2>I'M RAMKRISHNA JENA</h2>
                <p>Front End Developer</p>
                <Link to="/contact" ><button className='btn'><p>Contact Me</p></button></Link>
            </div>
            <div className='right-side'>
                <img alt="rightillustor" src={right} />

            </div>
        </div>
    )
}

export default FrontPage