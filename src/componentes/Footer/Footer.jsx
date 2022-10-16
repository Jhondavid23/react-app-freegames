import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../icons/videojuegos-png-2.png'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <section className='footer-section'>
                <article className='footer-article'>
                    <NavLink to={'/about'} className='text'>About Us</NavLink>
                    {/* <NavLink to={'/contact'} className='text'>Contact Us</NavLink> */}
                </article>
                <figure className='footer-logo'>
                    <img src={logo} alt="logo-footer" />
                </figure>
            </section>
            <div className='span'>
                <p>© 2022 by Juan Diaz. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer