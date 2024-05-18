import React from 'react'
import './stylesheets/Header.css'
import Logo from '/src/assets/Images/BlueView-logo.png'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        // Nav section
        <nav>
            <section className='h-wrapper'>
                <div className="flex-center paddings inner-width h-container">
                    <Link to='/' className='img-link'>
                        <img src={Logo} alt="Logo" width={100}/>
                    </Link>

                    <ul className="flex-center h-menu">
                        <li>
                            <NavLink to='/residencies'>Residencies</NavLink>
                        </li>
                        <li>
                            <NavLink to='/values'>Our Values</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user'>Get Started</NavLink>
                        </li>
                        <button className='button'>
                            <li>
                                <NavLink to=''>Contact</NavLink>
                            </li>
                        </button>
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Header